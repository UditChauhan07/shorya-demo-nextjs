// components/Header.tsx
"use client";

import { useRouter } from "next/navigation";
import { FaGamepad } from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-6 md:px-24 py-4 bg-gray-950 text-white shadow-md">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
        <FaGamepad size={24} className="text-purple-400" />
        <span className="text-xl font-bold">GameZone</span>
      </div>
      <nav className="space-x-6 hidden sm:block">
        <button onClick={() => router.push("/")} className="hover:text-purple-400 cursor-pointer">Home</button>
        <button onClick={() => router.push("/about")} className="hover:text-purple-400 cursor-pointer">About</button>
        <button onClick={() => router.push("/login")} className="hover:text-purple-400 cursor-pointer">Login</button>
      </nav>
    </header>
  );
}
