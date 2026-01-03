import React from "react"
import Fade from "react-reveal/Fade"

const TestimonialCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="relative w-full flex flex-row justify-center items-center bg-[url('../images/holographic-background.webp')] bg-cover bg-center p-12 rounded-2xl overflow-hidden xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          
          {/* Efek gloss bergerak */}
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:translate-x-[-100%] before:animate-gloss pointer-events-none"></div>

          {/* Card isi */}
          <div className="relative w-3/4 xxs:w-full xs:w-full backdrop-blur-md bg-white/40 border border-white/30 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <p className="text-black font-semibold text-xl xxs:text-sm sm:text-xl font-notoserif leading-relaxed">
              “Is and Cookies never disappoints! The cookies are soft, rich, and full
              of flavor — it feels like homemade love in every bite.”
            </p>

            <div className="mt-10">
              <h3 className="text-black text-2xl font-bold">Ayu Ramadhani</h3>
              <p className="text-black text-sm font-semibold opacity-50">
                Google Review
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default TestimonialCard
