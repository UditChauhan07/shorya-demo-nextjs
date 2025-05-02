"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupApi } from "@/services/apiService";
import Swal from "sweetalert2";

const signupSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  // 2️⃣ Add a refinement to ensure passwords match
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

// 3️⃣ Infer TypeScript type from schema
type SignupData = z.infer<typeof signupSchema>;

export default function Signup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupData) => {
    const finalData = {
      name: data.fullName,
      email: data.email,
      phone: Number(data.phoneNumber), // ensure it’s a number
      password: data.confirmPassword,
    };

    try {
      // 1) Show a loading alert
      Swal.fire({
        title: "Signing you up…",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // 2) Call your API
      const res = await signupApi(finalData);

      // 3) Close the loading alert
      Swal.close();

      // 4) Show success or error
      if ((res as any).error) {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: (res as any).error,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "You’ve signed up successfully.",
        }).then(() => {
          router.push("/login");
        });
      }
    } catch (err: any) {
      // close loading if it’s still open
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Oops…",
        text: err.message || "An unexpected error occurred.",
      });
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };
  const formVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  const imageVariant = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left side (Form) ───────────────────────────────────────── */}
        <motion.div
          className="w-full bg-white rounded-xl shadow-lg p-8 space-y-6"
          variants={formVariant}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Create an Account
          </h2>

          {/* 6️⃣ attach handleSubmit */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-black"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                placeholder="1234567890"
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="john@example.com"
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="********"
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="********"
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
            >
              {isSubmitting ? "Signing Up…" : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-gray-800 hover:underline cursor-pointer"
            >
              Log in
            </span>
          </p>
        </motion.div>

        {/* ── Right Side (Image) ───────────────────────────────────────── */}
        <motion.div
          className="hidden md:block relative w-full h-full"
          variants={imageVariant}
        >
          <img
            src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Signup"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
