import React from "react"
import Fade from "react-reveal/Fade"
import Blog1 from "../../src/images/bgcoklat.png"
import Blog2 from "../../src/images/bgcake.png"


const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8">
          {/* Section Title */}
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            STAY UP TO DATE
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Latest from Is and Cookies
          </h3>

          {/* Highlight Blog Card */}
          <div className="bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-2xl p-8 md:p-12 mb-8 shadow-lg hover:shadow-2xl transition duration-500">
            <h2 className="text-white text-3xl font-semibold mb-3">
              Rahasia Kelezatan Cookies Kami 🍪
            </h2>
            <p className="text-white opacity-90 text-lg mb-6">
              Semua cookies kami dibuat dari bahan premium seperti butter Eropa
              dan cokelat Belgia, menghasilkan tekstur lembut dan aroma menggoda.
              Setiap gigitan diciptakan dengan cinta agar menghadirkan momen manis
              untukmu dan orang tersayang.
            </p>
            <a
              href="/blog/rahasia-cookies"
              className="inline-flex items-center justify-center py-2.5 px-5 text-base font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-pink transition-all duration-300"
            >
              Continue Reading
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          {/* Secondary Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 p-8 md:p-12">
              <img
                src={Blog1}
                alt="Cookies Promo"
                className="rounded-xl mb-4 w-full h-56 object-cover"
              />
              <h2 className="text-gray-900 text-2xl font-semibold mb-3">
                Promo Oktober: Beli 2 Gratis 1!
              </h2>
              <p className="text-gray-600 mb-6">
                Nikmati promo spesial untuk varian Choco Lava dan Matcha Melt
                sepanjang bulan ini. Pesan sekarang dan ciptakan momen manismu
                bersama Is and Cookies.
              </p>
              <a
                href="/blog/promo-oktober"
                className="inline-flex items-center py-2.5 px-5 text-base font-medium border border-purple text-purple hover:bg-purple hover:text-white rounded-lg transition duration-300"
              >
                Continue Reading
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>

            {/* Blog 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 p-8 md:p-12">
              <img
                src={Blog2}
                alt="Tips Menyimpan Cookies"
                className="rounded-xl mb-4 w-full h-56 object-cover"
              />
              <h2 className="text-gray-900 text-2xl font-semibold mb-3">
                Tips Menyimpan Cookies Agar Tetap Renyah
              </h2>
              <p className="text-gray-600 mb-6">
                Simpan cookies dalam wadah kedap udara dan jauhkan dari sinar
                matahari langsung agar tetap renyah hingga dua minggu. 
                Cocok untuk stok camilan di rumah!
              </p>
              <a
                href="/blog/tips-cookies"
                className="inline-flex items-center py-2.5 px-5 text-base font-medium border border-purple text-purple hover:bg-purple hover:text-white rounded-lg transition duration-300"
              >
                Continue Reading
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
