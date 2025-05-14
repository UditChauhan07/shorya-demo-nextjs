"use client";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br  text-white px-6 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-400 drop-shadow-lg">
        Welcome to GameZone
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
        GameZone is the ultimate destination for gamers around the world.
        Whether you're into fast-paced shooters, strategic RPGs, or casual
        arcade fun, we've got you covered.
      </p>

      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
        Built with cutting-edge tech like{" "}
        <span className="text-blue-400 font-semibold">Next.js 13+</span>, we
        ensure blazing-fast performance, seamless navigation, and a fully
        responsive experience across all devices.
      </p>

      <p className="max-w-2xl text-lg md:text-xl text-gray-400 italic mb-10">
        Join tournaments, track your scores, earn achievements, and become a
        legend.
      </p>

      <div className="flex gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-700 transition"
        >
          Back to Dashboard
        </a>
        <a
          href="/products"
          className="px-6 py-3 bg-purple-500 rounded-lg font-medium text-white hover:bg-purple-600 transition"
        >
          Explore Games
        </a>
      </div>

      
    </div>
  );
}
