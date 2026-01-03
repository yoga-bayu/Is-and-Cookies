import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../../holo-theme/static/img/logo.png"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-3 py-5 rounded-md">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-1 items-center justify-center">
  <div className="hidden md:block">
    <div className="flex items-center space-x-6">
      <Link
        className="relative after:rounded after:bg-[#5a3e36] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#5a3e36] opacity-70 hover:opacity-100 px-2 py-2 rounded-md text-sm font-medium font-montserrat"
        to="/"
      >
        Home
      </Link>
      <Link
        className="relative after:rounded after:bg-[#5a3e36] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#5a3e36] opacity-70 hover:opacity-100 px-2 py-2 rounded-md text-sm font-medium font-montserrat"
        to="/about"
      >
        About
      </Link>
      <Link
        className="relative after:rounded after:bg-[#5a3e36] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#5a3e36] opacity-70 hover:opacity-100 px-2 py-2 rounded-md text-sm font-medium font-montserrat"
        to="/gallery"
      >
        Gallery
      </Link>
      <Link
        className="relative after:rounded after:bg-[#5a3e36] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#5a3e36] opacity-70 hover:opacity-100 px-2 py-2 rounded-md text-sm font-medium font-montserrat"
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className="relative after:rounded after:bg-[#5a3e36] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#5a3e36] opacity-70 hover:opacity-100 px-2 py-2 rounded-md text-sm font-medium font-montserrat"
        to="/contact"
      >
        Contact
      </Link>
    </div>
  </div>
</div>


          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              aria-label="Toggle Menu"
              aria-expanded={openMenu}
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="black"
                role="img"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="transition duration-700 ease-in-out md:hidden">
          <div className="pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="block text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium"
              to="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="block text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="block text-black opacity-50 hover:opacity-100 px-3 py-3 rounded-md text-m font-medium"
              to="/contact"
            >
              Contact
            </Link>

            <div className="items-center mt-20 py-3">
              <a
                href="tel:#"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
