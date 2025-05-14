"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGamepad, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

export default function Header() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateToken = () => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    };

    window.addEventListener("token-changed", updateToken);
    updateToken();

    return () => {
      window.removeEventListener("token-changed", updateToken);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.dispatchEvent(new Event("token-changed"));
    setToken(null);
    setDropdownOpen(false);
    router.push("/");
  };

  const navigateAndClose = (path: string) => {
    router.push(path);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-gray-950 text-white shadow-md px-6 md:px-24 py-4 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          onClick={() => navigateAndClose("/")}
        >
          <FaGamepad size={24} className="text-purple-400" />
          <span className="text-xl font-bold">GameZone</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-8 text-base">
          <button
            onClick={() => router.push("/")}
            className="hover:text-purple-400 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => router.push("/about")}
            className="hover:text-purple-400 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => router.push("/games")}
            className="hover:text-purple-400 cursor-pointer"
          >
            Games
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="hover:text-purple-400 cursor-pointer"
          >
            Contact
          </button>

          {token ? (
            <>
              <div className="relative mr-5">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center group cursor-pointer"
                >
                  <FaUserCircle
                    size={22}
                    className="text-white group-hover:text-purple-400 transition-colors"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                    <button
                      onClick={() => navigateAndClose("/profile")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Update Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="hover:text-purple-400 cursor-pointer"
            >
              Login
            </button>
          )}

          <button
            className="cursor-pointer hover:text-purple-400"
            onClick={() => router.push("/cart")}
          >
            <FaCartPlus size={22} />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="sm:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-4 bg-gray-900 rounded shadow-lg py-4 px-4 space-y-4">
          <button
            onClick={() => navigateAndClose("/")}
            className="block w-full text-left hover:text-purple-400"
          >
            Home
          </button>
          <button
            onClick={() => navigateAndClose("/about")}
            className="block w-full text-left hover:text-purple-400"
          >
            About
          </button>
          <button
            onClick={() => navigateAndClose("/games")}
            className="block w-full text-left hover:text-purple-400"
          >
            Games
          </button>
          <button
            onClick={() => navigateAndClose("/contact")}
            className="block w-full text-left hover:text-purple-400"
          >
            Contact
          </button>

          {token ? (
            <>
              <button
                onClick={() => navigateAndClose("/profile")}
                className="block w-full text-left hover:text-purple-400"
              >
                Update Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left hover:text-purple-400"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigateAndClose("/login")}
              className="block w-full text-left hover:text-purple-400"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}
