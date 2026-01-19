import React from 'react';
import TopBar from './Topbar';
import MiddleNavbar from './Midbar';
import { BottomNavbar } from './BottomNavbar';

export default function Navbar() {
  return (
    <div>
      {/* 🔥 Black Friday Banner */}
      <div className='bg-[#1a1d20]'>
        <div className="max-w-[1220px] mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 font-sans gap-2 sm:gap-0">

          {/* Left: Black Friday */}
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 text-black px-2 py-0.5 rounded-sm -rotate-3 font-semibold text-sm">
              Black
            </div>
            <span className="text-lg text-white">Friday</span>
          </div>

          {/* Middle: Offer */}
          <div className="text-center text-sm text-white">
            <span className="text-gray-300">Up to </span>
            <span className="text-yellow-400 font-bold text-xl">59%</span>
            <span className="text-gray-300"> OFF</span>
          </div>

          {/* Right: Button */}
          <button className="bg-yellow-500 text-black font-medium px-4 py-2 rounded-md hover:scale-105 transition-transform mt-2 sm:mt-0">
            SHOP NOW →
          </button>

        </div>
      </div>

      {/* Nav Sections */}
      <TopBar />
      <MiddleNavbar />
      <BottomNavbar />
    </div>
  );
}
