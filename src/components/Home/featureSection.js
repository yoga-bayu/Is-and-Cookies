import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import "../../styles/global.css"

// Assets
import Hero1 from "../../images/brownies1.png"
import Hero2 from "../../images/onde-onde.png"
import Hero3 from "../../images/brownies.png"
import Profile1 from "../../images/profile1.png"
import Profile2 from "../../images/profile2.png"

const HeroImageSlider = () => {
  const images = [Hero1, Hero2, Hero3]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}

const FeatureSection = () => {
  return (
    <div className="max-w-10xl mx-auto px-4 lg:px-8 py-10">
      {/* Cards Section */}
      <Fade bottom cascade>
        <div className="mt-10 flex flex-wrap justify-center items-center text-center gap-6">
          {[
            { color: "amber", title: "Rasa Premium", subtitle: "Lezat & Lembut" },
            { color: "rose", title: "Bahan Pilihan", subtitle: "Fresh & Berkualitas" },
            { color: "emerald", title: "Desain Cantik", subtitle: "Cocok untuk Hadiah" },
            { color: "sky", title: "Pelayanan Cepat", subtitle: "Antar ke Rumahmu" },
          ].map((item, i) => (
            <div
              key={i}
              className={`
                bg-white/90 backdrop-blur-md p-8 rounded-2xl 
                shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
                border border-white/50 card-shine 
                w-full sm:w-[45%] md:w-[40%] lg:w-[22%]
              `}
            >
              <h3 className={`text-${item.color}-800 text-2xl font-semibold`}>
                {item.title}
              </h3>
              <h4 className={`mt-4 text-${item.color}-700 opacity-80 text-lg`}>
                {item.subtitle}
              </h4>

            </div>
          ))}
        </div>
      </Fade>

      {/* Hero Section */}
        <div className="mt-16 flex flex-col lg:flex-row gap-10 items-center pb-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <HeroImageSlider />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-[#333] text-3xl sm:text-4xl font-semibold">
              KELEZATAN TIADA HENTI
            </h2>

            <h3 className="text-[#111] text-4xl sm:text-4xl font-semibold leading-tight mt-3">
              Saatnya Menikmati Sensasi Rasa yang Tak Terlupakan
            </h3>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Berawal dari cinta pada aroma cookies yang baru matang, 
              <span className="font-semibold"> Is and Cookies </span> 
              lahir untuk menghadirkan kebahagiaan sederhana di setiap gigitan. 
              Tak hanya untuk dinikmati sendiri, cookies kami juga menjadi pilihan sempurna 
              untuk berbagai momen istimewa — dari hadiah kecil untuk orang tersayang, 
              hingga suguhan elegan di acara besar seperti pernikahan, ulang tahun, 
              atau hantaran spesial.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-end">
              <a
                href="tel:#"
                className="bg-[#25D366] transition-all duration-500 ease-in-out w-full sm:w-auto 
                          flex items-center justify-center px-8 py-3 text-base font-medium 
                          rounded-md text-center text-white 
                          hover:text-black border border-[#25D366] hover:bg-transparent hover:border-[#a1e66a] hover:bg-[#a1e66a]
                          md:text-lg md:px-10 shadow-md hover:shadow-lg"
              >
                Tanya-tanya
              </a>

              <a
                href="/gallery"
                className="transition-all duration-500 ease-in-out w-full sm:w-auto 
                          flex items-center justify-center px-8 py-3 border border-purple 
                          text-base font-medium rounded-md text-white hover:text-black 
                          bg-amber hover:bg-transparent md:py-3 md:text-lg md:px-10 
                          shadow-md hover:shadow-lg"
              >
                View Gallery
                <svg
                  className="w-4 h-4 ml-2 rtl:rotate-180"
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


     <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">

          {/* CARD 3D */}
          <div
              className="
                w-2/6 bg-white p-8 rounded-2xl m-5 
                xxs:w-full xs:w-full sm:w-2/6
                shadow-[0_10px_20px_rgba(0,0,0,0.15)]
                hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)]
                hover:-translate-y-2
                hover:rotate-[0.5deg]
                transition-all duration-300 ease-out
                transform
              "
            >
              <span className="text-black font-semibold font-montserrat text-4xl">
                OUR INGREDIENTS
              </span>

              <div className="mt-5">
                <div>
                  <p className="text-black text-2xl">Premium Butter</p>
                  <p className="text-black opacity-50 text-sm">
                    Memberi aroma lembut dan rasa gurih alami.
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-black text-2xl">Fresh Chocolate</p>
                  <p className="text-black opacity-50 text-sm">
                    Leleh di mulut, manisnya pas, bikin nagih!
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-black text-2xl">Homemade Touch</p>
                  <p className="text-black opacity-50 text-sm">
                    Dibuat dengan cinta di setiap adonan.
                  </p>
                </div>
              </div>
            </div>


          {/* IMAGE SECTION */}
          <div
            className="w-4/6 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 bg-cover bg-center bg-no-repeat"
          >
            <h2 className="text-coklat font-semibold text-4xl mt-24">
              Sweet Moments Start with Is and Cookies
            </h2>
            <p className="mt-10 text-coklat opacity-80">
              Kami percaya setiap gigitan punya cerita. Dari bahan pilihan terbaik,
              proses pembuatan yang penuh cinta, hingga aroma cookies hangat yang
              menggoda — semuanya kami hadirkan untuk menciptakan momen manis bersama
              orang-orang tersayang. Karena di Is and Cookies, kebahagiaan dimulai dari
              rasa yang tulus.
            </p>
          </div>

        </div>
      </Fade>



      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          OUR SPECIAL COOKIES
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-4xl bg-gradient-to-r from-coklat text-transparent bg-clip-text">
          A Bite of Happiness
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Di Is and Cookies, kami percaya setiap gigitan punya cerita. Cookies kami 
          dibuat dari bahan pilihan terbaik, dipanggang dengan sempurna, dan dikemas 
          dengan cinta — menciptakan rasa manis yang mampu menghadirkan senyum di 
          setiap momen. Satu gigitan, dan kamu akan tahu kenapa semua orang jatuh cinta!
        </p>
      </div>


      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          GET IN TOUCH
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-4xl bg-gradient-to-r from-coklat text-transparent bg-clip-text">
          We’re Just a Bite Away!
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Punya pertanyaan, masukan, atau ingin pesan cookies spesial buatan kami?  
          Tim Is and Cookies siap menjawab semua keingintahuanmu. Jangan ragu untuk 
          menghubungi kami dan rasakan manisnya pelayanan dari hati.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-amber text-white hover:text-amber border border-amber hover:bg-transparent md:text-lg md:px-10"
            >
              Kirim Pesan
            </a>
          </div>
        </div>
      </div>


      <Fade bottom cascade>
  <div className="grid grid-cols-3 gap-6 mt-10 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5">
    {/* CARD 1 */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
      <img
        src={Profile2}
        alt="Customer 1"
        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-pink-300"
      />
      <h3 className="text-lg font-semibold text-black">Sarah Amelia</h3>
      <div className="flex justify-center mt-2">
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400 opacity-50">⭐</i>
      </div>
      <p className="mt-4 text-gray-700 italic">
        “Cookies-nya enak banget! Manisnya pas, teksturnya lembut di dalam dan renyah di luar. 
        Anak-anak juga suka banget ❤️.”
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
      <img
        src={Profile1}
        alt="Customer 2"
        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-purple-300"
      />
      <h3 className="text-lg font-semibold text-black">Dimas Hidayat</h3>
      <div className="flex justify-center mt-2">
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
      </div>
      <p className="mt-4 text-gray-700 italic">
        “Pesan buat hampers lebaran, packaging-nya cantik banget dan rasanya nggak kalah sama cookies import. Recommended!”
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
      <img
        src={Profile2}
        alt="Customer 3"
        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-amber-300"
      />
      <h3 className="text-lg font-semibold text-black">Maya Putri</h3>
      <div className="flex justify-center mt-2">
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400">⭐</i>
        <i className="text-yellow-400 opacity-50">⭐</i>
        <i className="text-yellow-400 opacity-50">⭐</i>
      </div>
      <p className="mt-4 text-gray-700 italic">
        “Cocok banget buat teman ngopi sore! Cookies-nya wangi dan fresh banget, bikin nagih tiap kali beli 😍.”
      </p>
    </div>
  </div>
</Fade>


      {/* <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-center xxs:flex-col xs:flex-col sm:flex-row text-center">
          <div className="w-1/3 bg-gradient-to-r from-amber-200 to-orange-300 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 shadow-lg">
            <h3 className="text-brown-800 text-2xl font-semibold">Premium Quality</h3>
            <h4 className="mt-6 text-brown-700 opacity-80 text-lg">
              Dibuat dari bahan terbaik dengan rasa autentik dan tekstur sempurna.
            </h4>
          </div>

          <div className="w-1/3 bg-gradient-to-r from-pink-200 to-rose-300 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 shadow-lg">
            <h3 className="text-brown-800 text-2xl font-semibold">Freshly Baked</h3>
            <h4 className="mt-6 text-brown-700 opacity-80 text-lg">
              Setiap cookies dibuat segar setiap hari dengan penuh cinta.
            </h4>
          </div>

          <div className="w-1/3 bg-gradient-to-r from-green-200 to-lime-300 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 shadow-lg">
            <h3 className="text-brown-800 text-2xl font-semibold">Fast Delivery</h3>
            <h4 className="mt-6 text-brown-700 opacity-80 text-lg">
              Kirim cepat ke seluruh Indonesia dengan kemasan aman dan rapi.
            </h4>
          </div>
        </div>
      </Fade>  */}

      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection