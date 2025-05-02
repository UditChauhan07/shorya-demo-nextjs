// app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 text-center">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => router.push("/")}
        className="cursor-pointer px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
