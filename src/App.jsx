// import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'

function About() {
  return <div className="p-8 text-2xl font-bold text-pink-600">About Page</div>
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="flex gap-4 p-4 bg-white shadow-md">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>

      {/* Route Views */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
