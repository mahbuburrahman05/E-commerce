import React, { useContext } from "react";
// Bottom Navigation Bar
import { FaPhoneAlt, FaListUl, FaExchangeAlt, FaHeadset, FaTruck } from "react-icons/fa";
import { ElectronicsContext } from "../Root/ProductProvider";
export function BottomNavbar() {
    const { categories, loading } = useContext(ElectronicsContext);
  return (
    <div className="max-w-[1220px] mx-auto bg-white text-[#1f628a] flex items-center justify-between px-6 py-3 font-sans border-t border-gray-200">

      {/* Left: Navigation Items */}
      <div className="flex items-center gap-10 text-sm font-medium">

        {/* All Categories with dropdown-like list */}
<div className="relative group">
  <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-amber-400 hover:text-black">
    <FaListUl className="text-lg" />
    <span>All Categories</span>
  </div>

  <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md border 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 z-50">
    <ul className="py-2">
      {categories.map((cat) => (
        <li
          key={cat.category}
          className="px-4 py-2 text-sm hover:bg-amber-300 hover:text-black cursor-pointer"
          onClick={() => setActive(cat.category)}
        >
          {cat.category}
        </li>
      ))}
    </ul>
  </div>
</div>


        <div className="flex  p-2 hover:bg-amber-400 items-center gap-2 cursor-pointer hover:text-black">
          <FaTruck className="text-lg" />
          <span>Track Order</span>
        </div>

        <div className="flex  p-2 hover:bg-amber-400 items-center gap-2 cursor-pointer hover:text-black">
          <FaExchangeAlt className="text-lg" />
          <span>Compare</span>
        </div>

        <div className="flex  p-2 hover:bg-amber-400 items-center gap-2 cursor-pointer hover:text-black">
          <FaHeadset className="text-lg" />
          <span>Customer Support</span>
        </div>
      </div>

      {/* Right: Call Info */}
      <div className="flex  p-2 hover:bg-amber-400 items-center gap-3 text-lg font-semibold">
        <FaPhoneAlt className="text-[#1f628a]" />
        <span>+880 1234-567890</span>
      </div>
    </div>
  );
}