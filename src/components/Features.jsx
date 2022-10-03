import React from "react"
import featureImg from "../assets/images/desktop/image-interactive.jpg"

function Features() {
    return (
      <div className="lg:max-h-[600px] sm:flex sm:pb-[5em] pt-[5em] pb-[3em] px-[2em] md:px-[3em] text-center">
        <div className="sm:w-[50%] lg:w-[60%] relative z-0">
          <img src={featureImg} alt="interactive vr" className="h-full w-full object-cover"/>
        </div>
        <div className="bg-white p-[2em] sm:w-[50%] sm:py-0 sm:text-left sm:px-[1em] md:px-[2em] md:self-end lg:absolute lg:right-0 lg:mr-[3em] lg:pt-[4em] lg:pl-[5em]">
          <h2 className="text-3xl uppercase mb-[1em]">
            The leader in <span className="block">interactive vr</span>
          </h2>
          <p className="font-Alata text-darkGray">
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    )
  }
  
  export default Features
  