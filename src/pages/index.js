import React, { useState, useEffect, useRef } from "react"

// Components
import Layout from "../components/layout"
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => {
  const [showIntro, setShowIntro] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [screenType, setScreenType] = useState("desktop")
  const videoRef = useRef(null)

  // CEK APAKAH INTRO SUDAH PERNAH DITAMPILKAN
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("introPlayed")

    if (!hasPlayed) {
      setShowIntro(true)
    }
  }, [])

  // DETEKSI SCREEN TYPE
  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth

      if (width <= 640) setScreenType("mobile")
      else if (width <= 1024) setScreenType("tablet")
      else setScreenType("desktop")
    }

    updateScreen()
    window.addEventListener("resize", updateScreen)
    return () => window.removeEventListener("resize", updateScreen)
  }, [])

  // AUTO PLAY
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  // Klik menutup intro
  const handleClickIntro = () => {
    setFadeOut(true)

    // SIMPAN INFORMASI BAHWA INTRO SUDAH PERNAH DIPUTAR
    sessionStorage.setItem("introPlayed", "true")

    setTimeout(() => setShowIntro(false), 700)
  }

  // Tentukan video berdasarkan layar
  const videoSrc =
    screenType === "mobile"
      ? "/img/intromobile.mp4"
      : screenType === "tablet"
      ? "/img/introtablet.mp4"
      : "/img/introdesktop1.mp4"

  return (
    <>
      {/* INTRO VIDEO FULLSCREEN */}
      {showIntro && (
        <div
          onClick={handleClickIntro}
          className={`fixed inset-0 w-screen h-screen bg-black z-[9999] cursor-pointer 
            transition-opacity duration-700 
            ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className={`transition-opacity duration-700 ${showIntro ? "opacity-0" : "opacity-100"}`}>
        <Layout>
          <Seo title="Is And Cookies" />
          <Header />
          <FeatureSection />
          <FeaturedBlog />
        </Layout>
      </div>
    </>
  )
}

export default IndexPage
