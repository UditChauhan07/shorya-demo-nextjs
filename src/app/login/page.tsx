"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { LoginApi } from "@/services/apiService";

// 1. Zod Schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const finalData = {
      email: data.email,
      password: data.password,
    };

    try {
      // 1) Show a loading alert
      Swal.fire({
        title: "Logging..",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // 2) Call your API
      const res = await LoginApi(finalData);

      // 3) Close the loading alert
      Swal.close();

      // 4) Show success or error
      if ((res as any).error) {
        Swal.fire({
          icon: "error",
          title: "Loggied-in Failed",
          text: (res as any).error,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Login Succesfully",
        }).then(() => {
          route.push("/dashboard");
          localStorage.setItem("token", res.token);
          localStorage.setItem("name", res.userDetails.name);
          localStorage.setItem("userId", res.userDetails.userId);
          localStorage.setItem("email", res.userDetails.email);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hidden md:block relative w-full h-full"
          variants={imageVariants}
        >
          <img
            src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Signup"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </motion.div>

        <motion.div
          className="w-full bg-white rounded-xl shadow-lg p-8 space-y-6"
          variants={formVariants}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Welcome Back Captain
          </h2>

          {/* 2. Form Handling */}
          <form
            className="space-y-4 text-black"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className="w-full px-4 py-2 border rounded-md border-gray-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                {...register("password")}
                className="w-full px-4 py-2 border rounded-md border-gray-300"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 space-y-3 text-black">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              <FcGoogle size={20} /> Sign in with Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              <FaGithub size={20} /> Sign in with GitHub
            </button>
          </div>

          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => route.push("/signup")}
              className="text-gray-800 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
