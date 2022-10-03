import React from "react"
import facebook from "../assets/images/icon-facebook.svg"
import instagram from "../assets/images/icon-instagram.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import twitter from "../assets/images/icon-twitter.svg"
import logo from "../assets/images/logo.svg"

function Footer() {
    const navigation = ["About", "Careers", "Events", "Products", "Support"]
    const social = [facebook, twitter, pinterest, instagram]

    return (
      <footer className="bg-black px-[2em] py-[3em] lg:px-[3em] text-center font-Alata md:flex md:justify-between md:h-[200px]">
        <div className="md:flex md:flex-col md:justify-between">
          <div className="mb-[2em] md:mb-0">
              <img 
                  src={logo} 
                  alt="Loopstudios"
                  className="mx-auto md:ml-0"
                  />
          </div>
          <nav>
              <ul className="text-white md:flex">
                  {
                      navigation.map((nav, index) => 
                          <a href="#" key={index}>
                              <li className="w-fit mx-auto mb-[.5em] md:my-0 md:mr-[1em] lg:mr-[2em] pb-[10px] hover:pb-0 hover:after:content-[''] hover:after:block hover:after:my-0 hover:after:mx-auto hover:after:pt-[.5em] hover:after:border-b-[2px] hover:after:border-b-white hover:after:w-[40%]">
                                  {nav}
                              </li>
                          </a>)
                  }
              </ul>
          </nav>
        </div>
        <div className="md:flex md:flex-col md:justify-between">
          <div className=" flex justify-center my-[2em] md:my-0 md:justify-end">
            {
              social.map(icon => 
                <a 
                  href="#" 
                  key={icon}
                  className="mx-[1em] hover:border-b-[2px] hover:pb-[8px] hover:border-b-white pb-[10px]"
                  >
                  <img src={icon} alt={icon}/>
                </a>  
              )
            }
          </div>
          <p className="text-darkGray md:mr-[1em] md:pb-[10px]">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  