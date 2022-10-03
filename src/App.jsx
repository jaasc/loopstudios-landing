import React from "react"
import Creations from "./components/Creations"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="font-Josefin-Sans text-veryDarkGray">
      <div className="bg-black/40 bg-blend-darken bg-img-hero-mobile sm:bg-img-hero-desktop bg-center bg-cover bg-no-repeat h-screen max-h-[800px] flex flex-col">
        <Header/>
        <Hero/>
      </div>
      <Features/>
      <Creations/>
      <Footer/>
    </div>
  )
}

export default App
