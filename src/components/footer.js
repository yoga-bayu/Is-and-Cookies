import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png" 
import "../styles/global.css"
import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-[#8b5e34] text-white mt-16 rounded-t-2xl shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Bagian 1: Logo dan Deskripsi */}
        <div>
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Is and Cookies"
              className="h-20 w-20 object-contain rounded-full shadow-lg bg-white p-2"
            />
            <h2 className="font-pinyonScript text-3xl font-semibold font-montserrat text-amber-700">
              Is and Cookies
            </h2>
          </div>
          <p className="text-sm mt-4 text-brown-800 opacity-80 leading-relaxed">
            Kami menghadirkan cookies buatan tangan dengan cinta — renyah di luar,
            lembut di dalam, dan selalu siap menciptakan momen manis untukmu.
          </p>
          <p className="mt-6 text-sm text-brown-600">
            <span className="font-semibold">&copy; {new Date().getFullYear()}</span>{" "}
            Is and Cookies. All Rights Reserved.
          </p>
        </div>

        {/* Bagian 2: Navigasi Cepat */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-brown-900 mb-4">
            Jelajahi
          </h3>
          <ul className="space-y-2 text-brown-700">
            <li>
              <Link
                to="/"
                className="text-white transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white transition duration-200"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-white transition duration-200"
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-white transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white transition duration-200"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Bagian 3: Kontak & Media Sosial */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-brown-900 mb-4">
            Hubungi Kami
          </h3>
          <p className="text-brown-700 mb-4">
            Ada pertanyaan atau ingin pesan cookies?
            <br />
            Hubungi kami lewat media sosial di bawah ini
          </p>
          <div className="flex justify-center md:justify-end space-x-4 text-2xl text-brown-800">
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/isandcookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@isandcookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition duration-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://facebook.com/isandcookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="text-center text-sm py-4 border-t border-amber-300 text-brown-700 bg-amber-100/50 rounded-b-2xl">
        “Sweet Moments Start with Is and Cookies” 
      </div>
    </footer>
  )
}

export default Footer
