import React from "react"
import creationlist from "../creationlist"

function Creations() {
  console.log(creationlist)
    return (
      <div className="px-[2em] pb-[3em] sm:pt-[3em] sm:pb-0 md:px-[3em] text-center">
        <div className="mb-[2em] sm:flex sm:justify-between">
          <h2 className="text-3xl uppercase">
            Our creations
          </h2>
          <button className="uppercase text-lg border-[2px] px-[2em] font-Alata tracking-[3px] border-black hidden sm:block hover:bg-black hover:text-white">
            See all
          </button>
        </div>
        <div>
          {
            creationlist.map((creation, index) => 
                <div 
                  key={index} 
                  className="sm:mb-[3em] md:flex md:h-[400px]">
                    {
                      creation.list.map((works, index) =>
                        <div 
                          key={index}
                          className={`w-full mb-[1em] h-[150px] bg-${works.image.mobile} bg-cover bg-top bg-no-repeat
                            md:w-[25%] md:bg-${works.image.desktop} md:bg-center md:mb-0 md:h-full md:mx-[.5em]
                          `}
                          >
                          <div className="flex items-end p-[1em] w-full h-full cursor-pointer bg-gradient-to-tr from-black/50 to-white/20 text-white hover:bg-white/50 hover:font-Alata hover:text-black">
                            <h3 className="h-fit uppercase text-xl md:text-2xl text-left max-w-[130px]">
                              {works.title}
                            </h3>
                          </div>
                        </div>
                      )
                    }
                </div>
              )
          }
        </div>
        <button className="uppercase text-lg border-[2px] mt-[1em] px-[2em] py-[.5em] font-Alata tracking-[3px] border-black sm:hidden hover:bg-black hover:text-white">
            See all
          </button>
      </div>
    )
  }
  
  export default Creations
  