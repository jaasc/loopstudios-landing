import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useState } from "react";
import close from "../assets/images/icon-close.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import logo from "../assets/images/logo.svg";

function Header() {
    const [menu, setMenu] = useState(false)
    const navigation = ["About", "Careers", "Events", "Products", "Support"]

    menu ? disableBodyScroll(document) : enableBodyScroll(document)

    return (
      <header className={`font-Alata w-full flex items-center p-[2em] sm:px-[3em]
        ${menu && 'flex-col absolute bg-black w-full h-full z-[100]'}`}>
        <div className="flex justify-between items-center w-full">
            <div>
                <img 
                    src={logo} 
                    alt="Loopstudios"
                    />
            </div>
            <img 
                src={menu ? close : hamburger} 
                alt="menu"
                className="h-fit cursor-pointer md:hidden"
                onClick={() => setMenu(!menu)}
                />
        </div>
        <nav className={`md:flex ${menu ? 'flex font-Josefin-Sans w-full h-full items-center' : 'hidden'}`}>
            <ul className={`flex text-white ${menu && 'flex-col'}`}>
                {
                    navigation.map((nav, index) => 
                        <a href="#" key={index}>
                            <li className={`${index%2 === 1 && 'mx-[2em]'} ${menu && 'mx-[0] uppercase text-3xl leading-[1.75] hover:scale-[1.1]'}
                                pb-[10px] md:hover:pb-0 md:hover:after:content-[''] md:hover:after:block md:hover:after:my-0 md:hover:after:mx-auto md:hover:after:pt-[.5em] md:hover:after:border-b-[2px] md:hover:after:border-b-white md:hover:after:w-[40%]
                                `}>
                                {nav}
                            </li>
                        </a>)
                }
            </ul>
        </nav>
      </header>
    )
  }
  
  export default Header
  