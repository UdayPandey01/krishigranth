'use client'

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSchemes(){
    router.push('/government-schemes')
  }

  function handleHome(){
    router.push('/')
  }
  return (
    <nav
      className={`flex flex-row gap-3 items-center justify-between max-h-12 p-3 mt-2 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/30" : "bg-transparent"
      }`}
    >
      <div className="text-3xl font-extrabold ml-2 drop-shadow-md cursor-pointer" onClick={handleHome}>KrishiGranth</div>
      <div className="flex flex-row items-center gap-4 ml-4">
        <div className="font-medium cursor-pointer hover:shadow-xs hover:scale-105 transform transition-transform duration-300 ease-out">Weather</div>
        <div className="font-medium cursor-pointer hover:shadow-xs hover:scale-105 transform transition-transform duration-300 ease-out">Crops Description</div>
        <div onClick={handleSchemes} className="font-medium cursor-pointer hover:shadow-xs hover:scale-105 transform transition-transform duration-300 ease-out">Government Schemes</div>
        <div className="font-medium cursor-pointer hover:shadow-xs hover:scale-105 transform transition-transform duration-300 ease-out">About</div>
        <button className="flex ml-7 mr-3 bg-green-500 rounded-xl p-2 text-white shadow-sm hover:shadow-md hover:scale-105 transform transition-transform duration-300 ease-out">
          Join Now
        </button>
      </div>
    </nav>
  );
};
