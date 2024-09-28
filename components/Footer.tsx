import React from "react";
import Image from "next/image";
import x from '../assests/x.webp'
import gitHub from '../assests/githubb.png'
import instagram from '../assests/instagram.png'

const Footer = () => {
  return (
    <footer className="bg-green-100 py-10">
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl font-bold">Trusted By Farmers</div>
        <div className="flex flex-row justify-around gap-10 mt-7 mb-10">
          <div className="text-3xl font-bold">Farm</div>
          <div className="text-3xl font-bold">Farm</div>
          <div className="text-3xl font-bold">Farm</div>
          <div className="text-3xl font-bold">Farm</div>
          <div className="text-3xl font-bold">Farm</div>
        </div>
        <hr className="w-full border-t-4 border-green-200 my-4" />
      </div>

      <div className="grid grid-cols-[2fr,1fr] gap-10 px-7">
        <div className="flex flex-col gap-3">
          <span className="mb-3 font-semibold text-xl">About</span>
          <div className="text-gray-600">About us</div>
          <div className="text-gray-600">Collections</div>
          <div className="text-gray-600">Support us</div>
          <div className="text-gray-600">Terms & Conditions</div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <span className="font-semibold text-xl">Follow us</span>
            <div className="flex gap-3 mt-3">
              <div>
                <Image className="w-8 h-8 bg-gray-300 rounded-full" src={x} alt="x logo"/>
              </div>
              <div>
              <Image className="w-8 h-8 bg-gray-300 rounded-full" src={instagram} alt="x logo"/>
              </div>
              <div>
              <Image className="w-8 h-8 bg-gray-300 rounded-full" src={gitHub} alt="x logo"/>
              </div>
            </div>
          </div>
          <div>
            <span className="font-semibold text-xl">Join our community</span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-500">
        © 2024 KrishiGranth. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
