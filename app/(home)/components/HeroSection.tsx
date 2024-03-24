import React from 'react'
import Link from 'next/link'
import { MovingBorderBtn } from '@/components/ui/moving-border';
import Title from './Title';

export default function HeroSection() {
  return (
  <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
    <div className="space-y-10 text-center lg:text-left"	>
        <h1 className="text-4xl lg:text-7xl font-bold">Hi... 👋 <br />
        Nice to meet you! <br />
        <span className="underline underline-offset-8 decoration-red-500">{"I'm Aditya."}</span></h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
              "I'm a front-end developer who enjoys designing and building web applications."
          }        
        </p>
        <Link href={"mailto:akrisna321@gmail.com"} className='inline-block group'>
          <Title text="Contact Me 📨"/>
        </Link>
    </div>
    <div className="relative">
      <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
        <div className="flex gap-3 translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-red-500"></div>
          <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
        </div>
        <div className="flex gap-3 -translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          <div className="w-32 h-32 rounded-full bg-red-500"></div>
        </div>
        <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
      </div>
      <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
      <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
        <p>📢Not Available for Work</p>
      </MovingBorderBtn>
      </div>
    </div>
  </div>
  );
}
