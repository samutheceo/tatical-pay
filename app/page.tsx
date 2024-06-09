"use client";

import { Squircle } from '@squircle-js/react';
import React, { useEffect, useState } from 'react';
import { BiLogoBitcoin } from "react-icons/bi";
import { FaPaypal, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import Image from 'next/image';

const Home: React.FC = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const banners = [
    "/banner1.gif",
    "/banner2.gif",
    "/banner3.gif",
    "/banner4.gif",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePaypalClick = () => {
    window.open("https://paypal.me/samutheceo?country.x=IT&locale.x=it_IT", "_blank");
  };

  return (
    <div className="absolute left-0 top-0 w-screen h-[100%] overflow-hidden select-none">
      <div className="w-full h-full z-0 absolute">
      <Image
        src={banners[bannerIndex]}
        alt=""
        layout="fill"
        className="w-screen h-screen object-cover"
      />
      </div>
      <div className="w-full h-full z-10 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
        <Squircle cornerRadius={25} cornerSmoothing={0.6} asChild className='w-fit h-fit px-8 py-4 bg-white/30 backdrop-blur-sm flex flex-col items-center justify-center md:scale-[1] scale-[0.9]'>
          <section className='w-fit h-fit flex flex-col items-center justify-center text-center gap-y-2'>
            <div className='rounded-full w-24 h-24 overflow-hidden flex items-center justify-center'>
            <Image
              src="/samu.gif"
              alt=""
              className='relative rounded-full w-full h-full'
            />
            </div>
            <div className='flex flex-col w-fit h-fit text-center items-center justify-center'>
              <h1 className='font-semibold text-white text-xl'>&quot;samu</h1>
              <h2 className='font-normal text-zinc-100 text-sm'>The Ceo</h2>
            </div>
            <div className='flex flex-wrap gap-x-2'>
              <Squircle cornerRadius={10} cornerSmoothing={0.6} asChild className='bg-orange-500/20 text-orange-500 text-xs px-2 py-1'>
                <span>Project Creator</span>
              </Squircle>
              <Squircle cornerRadius={10} cornerSmoothing={0.6} asChild className='bg-emerald-500/20 text-emerald-500 text-xs px-2 py-1'>
                <span>Developer</span>
              </Squircle>
              <Squircle cornerRadius={10} cornerSmoothing={0.6} asChild className='bg-yellow-500/20 text-yellow-500 text-xs px-2 py-1'>
                <span>Designer</span>
              </Squircle>
            </div>
            <div className='flex flex-col gap-y-2 mt-4 border-solid border-t-[1px] border-zinc-500 py-4'>
              <Squircle onClick={handlePaypalClick} cornerRadius={13} cornerSmoothing={0.6} asChild className='w-72 h-fit bg-blue-500 text-white text-sm px-4 py-2 flex items-center justify-center cursor-pointer transition-all duration-200 ease-linear hover:opacity-60'>
                <span className='flex flex-wrap gap-x-2'>
                  <span className='text-xl'><FaPaypal /></span>
                  <span>PayPal</span>
                </span>
              </Squircle>
              <Squircle onClick={handlePaypalClick} cornerRadius={13} cornerSmoothing={0.6} asChild className='w-72 h-fit bg-orange-500 text-white text-sm px-4 py-2 flex items-center justify-center cursor-pointer transition-all duration-200 ease-linear hover:opacity-60'>
                <span className='flex flex-wrap gap-x-2'>
                  <span className='text-xl'><BiLogoBitcoin /></span>
                  <span>Crypto</span>
                </span>
              </Squircle>
            </div>  
          </section>
        </Squircle>
        <footer className='absolute bottom-0 mb-2 text-md text-white flex flex-col items-center justify-center text-center w-full h-fit'>
          <span className='text-zinc-200/80 text-xs'>Tatical Pay</span>
          <span className='text-zinc-200/50 text-xs'>Designed by &quot;samu, in Italy</span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
