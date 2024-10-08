"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import logo from "../assests/logo.png";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export const Navbar = () => {
  const router = useRouter();
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

  function handleSchemes() {
    router.push("/government-schemes");
  }

  function handleHome() {
    router.push("/");
  }
  function handleWeather() {
    router.push("/weather");
  }
  function handleabout() {
    router.push("/about");
  }

  return (
    <nav
      className={`flex flex-row gap-3  items-center justify-between max-w-7xl mx-auto p-3 py-4 mt-4 sticky top-2 z-50 rounded-xl transition-all duration-300 shadow-lg ${
        isScrolled ? "backdrop-blur-md bg-white/10" : "bg-transparent"
      }`}
      style={{ top: "10px" }}
    >
      <div className="flex flex-row items-center">
        <div>
          <Image  src={logo} alt="logo" height={62} width={62} />
        </div>
        <div
          className="text-2xl font-extrabold text-black cursor-pointer hover hover:scale-105 transform transition-transform duration-300 ease-out"
          onClick={handleHome}
        >
          KrishiGranth
        </div>
      </div>
      <div className="flex font-medium items-center gap-9">
        <div className="flex items-center space-x-4">
          <span
            onClick={handleWeather}
            className="font-medium text-black cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-out"
          >
            Weather
          </span>
          <span className="font-medium text-black cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-out">
            Crops Description
          </span>
          <span
            onClick={handleSchemes}
            className="font-medium text-black cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-out"
          >
            Government Schemes
          </span>
          <span className="font-medium text-black cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-out" onClick={handleabout}>
            About
          </span>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
      </div>
    </nav>
  );
};
