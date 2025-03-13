import React from 'react'
import logo from '../images/hire.png'

function Header() {
    return (
        <>
        <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold text-gray-800">HIRGINIE</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-blue-600 font-semibold">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">About Us</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">Services</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">Resources</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">Jobs</a>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <button className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            CONTACT US
            <span className="ml-3 bg-white text-black p-1 rounded-full">
              ➔
            </span>
          </button>
        </div>
      </div>
    </header>
        </>
    )
}

export default Header
