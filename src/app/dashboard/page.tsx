"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashBoard() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // or remove specific keys
    window.dispatchEvent(new Event("token-changed"))
    router.push("/"); // redirect to login page
  };

  if (!name || !email) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {name}!</h1>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {email}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="cursor-pointer mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
