import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useLanguage } from "./hooks/useLanguage";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Facilities from "./pages/Facilities";
import CheckInOut from "./pages/CheckInOut";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="relative flex items-center justify-between p-4 bg-gray-900 shadow-md">
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            src="/assets/images/logowhite.png"
            alt="TR Residence"
            className="h-12 md:h-18 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links and language*/}
        <div className="hidden md:flex md:items-center md:gap-6">
          {/*language switcher */}
          <div className="flex items-center bg-gray-800 p-1 rounded-full text-sm font-medium border border-gray-700">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-pink-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("zh")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "zh"
                  ? "bg-pink-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              中
            </button>
          </div>
        </div>

        {/* Menu side Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="p-2 text-white transition-colors duration-200 md:hidden hover:text-pink-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Route Views */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/check-in-out" element={<CheckInOut />} />
      </Routes>
    </div>
  );
}

export default App;
