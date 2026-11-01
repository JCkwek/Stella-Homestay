import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Gallery from './pages/Gallery'

function About() {
  return <div className="p-8 text-2xl font-bold text-pink-600">About Page</div>
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="relative flex items-center justify-between p-4 bg-gray-900 shadow-md">
        <Link 
          to="/" 
          onClick={closeMenu} 
          className="text-xl font-bold text-white transition-colors duration-200 hover:text-pink-600 active:text-pink-600"
        >
          StellaHomestay
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link 
            to="/" 
            className="font-medium text-white transition-colors duration-200 hover:text-pink-600 active:text-pink-600"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="font-medium text-white transition-colors duration-200 hover:text-pink-600 active:text-pink-600"
          >
            About
          </Link>
        </div>

        {/* Menu side Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="p-2 text-white transition-colors duration-200 md:hidden hover:text-pink-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Backdrop for Mobile Sidebar */}
      {isMenuOpen && (
        <div 
          onClick={closeMenu} 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Mobile Slide-out Drawer (Appears from the right) */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-black">Menu</span>
          <button 
            onClick={closeMenu}
            className="p-1 text-black hover:text-pink-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-lg font-medium text-black transition-colors duration-200 hover:text-pink-600 active:text-pink-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-lg font-medium text-black transition-colors duration-200 hover:text-pink-600 active:text-pink-600"
          >
            House Rules
          </Link>
        </div>
      </div>

      {/* Route Views */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App