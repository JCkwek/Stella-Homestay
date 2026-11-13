import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { FaGlobe } from "react-icons/fa";

export default function Sidebar({ isOpen, onClose }) {
  const { lang, setLang } = useLanguage();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-gray-800">Menu</span>
            <button
              onClick={onClose}
              className="p-1 text-gray-600 hover:text-pink-600 focus:outline-none"
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4 p-6">
            <Link
              to="/"
              onClick={onClose}
              className="text-lg font-medium text-gray-800 transition-colors hover:text-pink-600"
            >
              {lang === "en" ? "Home" : "首页"}
            </Link>
          </div>
        </div>

        {/* Language Switcher at the bottom of mobile menu */}
        <div className="p-6 border-t bg-gray-50">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <FaGlobe /> {lang === "en" ? "Select Language" : "选择语言"}
          </p>
          <div className="flex items-center bg-gray-200 p-1 rounded-xl">
            <button
              onClick={() => setLang("en")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                lang === "en"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("zh")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                lang === "zh"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
