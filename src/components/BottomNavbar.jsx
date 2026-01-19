import React, { useContext } from "react";
import {
  FaPhoneAlt,
  FaListUl,
  FaExchangeAlt,
  FaHeadset,
  FaTruck,
} from "react-icons/fa";
import { ElectronicsContext } from "../Root/ProductProvider";

export function BottomNavbar() {
  const { categories, loading } = useContext(ElectronicsContext);

  return (
    <div className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1220px] mx-auto text-[#1f628a] font-sans
                      flex flex-col md:flex-row
                      md:items-center md:justify-between
                      px-4 md:px-6 py-2 gap-3">

        {/* Left Navigation */}
        <div className="flex flex-wrap md:flex-nowrap items-center
                        gap-3 md:gap-8 text-xs sm:text-sm font-medium">

          {/* All Categories */}
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer
                            p-2 rounded hover:bg-amber-400 hover:text-black">
              <FaListUl className="text-base md:text-lg" />
              <span>All Categories</span>
            </div>

            <div
              className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md border
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible
                         transition-all duration-200 z-50"
            >
              <ul className="py-2 max-h-60 overflow-y-auto">
                {!loading &&
                  categories.map((cat) => (
                    <li
                      key={cat.category}
                      className="px-4 py-2 text-sm hover:bg-amber-300 hover:text-black cursor-pointer"
                    >
                      {cat.category}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded hover:bg-amber-400 hover:text-black cursor-pointer">
            <FaTruck className="text-base md:text-lg" />
            <span>Track Order</span>
          </div>

          <div className="flex items-center gap-2 p-2 rounded hover:bg-amber-400 hover:text-black cursor-pointer">
            <FaExchangeAlt className="text-base md:text-lg" />
            <span>Compare</span>
          </div>

          <div className="flex items-center gap-2 p-2 rounded hover:bg-amber-400 hover:text-black cursor-pointer">
            <FaHeadset className="text-base md:text-lg" />
            <span>Support</span>
          </div>
        </div>

        {/* Right Call Info */}
        <div className="flex items-center gap-2 md:gap-3
                        p-2 rounded hover:bg-amber-400
                        text-sm sm:text-base md:text-lg
                        font-semibold cursor-pointer">
          <FaPhoneAlt />
          <span>+880 1234-567890</span>
        </div>
      </div>
    </div>
  );
}
