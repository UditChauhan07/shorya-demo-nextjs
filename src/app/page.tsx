"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGamepad, FaRunning, FaChess } from "react-icons/fa";
import { GiGhost } from "react-icons/gi";

export default function GamingLandingPage() {
  const router = useRouter();

  // Stagger container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
  };

  // Slide-up + fade-in for items
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Sample genres
  const genres = [
    {
      icon: <FaGamepad size={28} className="text-purple-400" />,
      name: "Action",
    },
    {
      icon: <FaRunning size={28} className="text-purple-400" />,
      name: "Adventure",
    },
    {
      icon: <FaChess size={28} className="text-purple-400" />,
      name: "Strategy",
    },
    {
      icon: <GiGhost size={28} className="text-purple-400" />,
      name: "Zombies",
    },
  ];

  // Sample free PC games
  const games = [
    {
      id: 1,
      title: "GTA 5",
      src: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    },
    {
      id: 2,
      title: "Dying Light 2",
      src: "https://upload.wikimedia.org/wikipedia/en/6/6d/Dying_Light_2_cover_art.jpg",
    },
    {
      id: 3,
      title: "Last Of Us 2",
      src: "https://howlongtobeat.com/games/141122_The_Last_of_Us_Part_II_Remastered.jpg",
    },
    {
      id: 4,
      title: "Resident Evil 4 ",
      src: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
    },
  ];

  return (
    <motion.div
      className="space-y-24 px-6 md:px-24 pt-12 bg-gray-900 text-white pb-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* ─── Hero Section ─────────────────────────────────────── */}
      <motion.section
        className="flex flex-col-reverse md:flex-row items-center gap-8"
        variants={item}
      >
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold">Play Free PC Games</h1>
          <p className="text-lg text-gray-300">
            Discover and download the best free-to-play titles—no subscriptions,
            no hidden fees.
          </p>
          <div className="flex gap-4">
            <motion.button
              className="mt-4 px-8 py-3 bg-purple-400 text-gray-900 font-semibold rounded-md hover:bg-purple-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/games")}
            >
              Browse Games
            </motion.button>
            <motion.button
              className="mt-4 px-8 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-500 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/login")}
            >
              Log In
            </motion.button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-80">
            <img
              src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Gaming Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* ─── Genres Section ───────────────────────────────────── */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-4 gap-6"
        variants={container}
      >
        {genres.map((g, i) => (
          <motion.div
          key={i}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-transform transform cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          variants={item}
          onClick={() => router.push(`/games?genre=${g.name.toLowerCase()}`)}
        >
          <div className="p-4 bg-gray-700 rounded-full transition duration-300 group-hover:scale-110">
            {g.icon}
          </div>
          <h3 className="mt-4 text-xl font-medium">{g.name}</h3>
        </motion.div>
        
        ))}
      </motion.section>

      {/* ─── Featured Games ───────────────────────────────────── */}
      <motion.section className="space-y-6" variants={container}>
        <motion.h2 className="text-3xl font-bold" variants={item}>
          Featured Free Games
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
        >
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
              variants={item}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={game.src}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold">{game.title}</h4>
                <motion.button
                  className="mt-4 w-full px-4 py-2 bg-purple-400 text-gray-900 rounded-md hover:bg-purple-500 transition"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    /* handle download logic */
                  }}
                >
                  Download Free
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ─── Newsletter CTA ───────────────────────────────────── */}
      <motion.section
        className="py-12 bg-purple-400 rounded-lg text-center text-gray-900"
        variants={item}
      >
        <h3 className="text-2xl font-bold">Get Weekly Freebies</h3>
        <p className="mt-2 opacity-90">
          Subscribe to get the latest free game drops and exclusive offers.
        </p>
        <motion.form
          className="mt-6 flex justify-center gap-2 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            /* subscribe logic */
          }}
          variants={item}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded-l-md border outline-none focus:ring-0 "
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gray-900 text-purple-400 font-semibold rounded-r-md hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </motion.form>
      </motion.section>
    </motion.div>
  );
}
