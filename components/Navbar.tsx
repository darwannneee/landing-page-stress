import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/Home/logonavbar.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<div>
    {/* Header */}
    <nav className="bg-transparent fixed w-full shadow-transparent2 flex-col text-white z-50">
      <div className="flex flex-col md:flex-row">
        <div className={`flex justify-between items-center py-6 px-6 md:border-none ${isOpen ? 'border-b' : 'none'}`}>
            <div>
              <a href="/" className="">
                <img src={Logo.src} />
              </a>
            </div>
            <div className="items-center block md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
                  <path className={`${!isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  <path className={`${isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row justify-between w-full md:items-center border md:border-none mb-2 md:mb-0 2xl:pt-5`}>
          <div className="flex flex-col md:flex-row mx-auto gap-x-12">
            <a href="/" className="block px-6 py-2 fontLoginn md:text-1xl 2xl:text-2xl">Home</a>
            <a href="/about" className="block px-6 py-2 fontLoginn md:text-1xl 2xl:text-2xl">About</a>
            <a href="/article" className="block px-6 py-2 fontLoginn md:text-1xl 2xl:text-2xl">Article</a>
            <a href="/tools" className="block px-6 py-2 fontLoginn md:text-1xl 2xl:text-2xl">Tools</a>
          </div>
          <div className="flex flex-col md:flex-row px-4 py-4">
            <button className={`bgWarna text-white rounded-xl w-36 md:h-9 md:w-32 fontLoginn text-md hover:shadow-md mr-4`} >  </button>
          </div>
        </div>
      </div>  
    </nav>
</div>
  );
}

export default Header;
