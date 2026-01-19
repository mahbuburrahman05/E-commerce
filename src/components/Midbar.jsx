import { useContext, useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaEye } from "react-icons/fa";
import { ElectronicsContext } from "../Root/ProductProvider";
import MiniCart from "./MiniCart";

export default function MiddleNavbar() {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState(false);
    const { cart } = useContext(ElectronicsContext);
    
    let numberOfItems = cart.length;

    return (
        <div className="bg-[#1f628a]">

            {/* Logo + Search + Icons */}
            <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">

                {/* Logo */}
                <div className="flex items-center gap-2 text-xl font-bold text-white">
                    <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    </div>
                    <span>CLICON</span>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        className="w-full bg-white text-black py-3 px-4 sm:px-5 rounded-md outline-none shadow-md"
                    />
                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer" />
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 md:gap-6 text-2xl text-white">
                    {/* Cart with badge */}
                    <div className="relative">
                        <FaShoppingCart
                            className="cursor-pointer"
                            onClick={() => setItem(!item)}
                        />
                        {numberOfItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-white text-[#1f628a] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {numberOfItems}
                            </span>
                        )}
                        {item && <MiniCart />}
                    </div>

                    <FaHeart className="cursor-pointer" />

                    {/* USER ICON */}
                    <div className="relative">
                        <FaUser
                            className="cursor-pointer text-xl"
                            onClick={() => setOpen(!open)}
                        />

                        {/* POPUP */}
{open && (
  <div className="fixed top-16 inset-x-0 z-50 flex justify-center sm:justify-end px-4 sm:px-0">
    <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-[360px]">
      <h2 className="text-center text-black text-base sm:text-lg font-semibold mb-4 sm:mb-5">
        Sign in to your account
      </h2>

      {/* EMAIL */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Email Address</label>
        <input
          type="email"
          className="w-full mt-1 px-3 py-2 text-sm sm:text-base border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
        />
      </div>

      {/* PASSWORD */}
      <div className="mb-2">
        <div className="flex justify-between text-xs sm:text-sm text-gray-600">
          <label>Password</label>
          <span className="text-orange-500 cursor-pointer">
            Forget Password
          </span>
        </div>

        <div className="relative mt-1">
          <input
            type="password"
            className="w-full px-3 py-2 text-sm sm:text-base border border-black rounded-md pr-10 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <FaEye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* LOGIN BUTTON */}
      <button className="w-full text-sm sm:text-[15px] bg-orange-400 hover:bg-orange-500 text-white py-2.5 rounded-md mt-5 font-semibold flex items-center justify-center gap-2">
        LOGIN →
      </button>

      {/* DIVIDER */}
      <div className="flex items-center gap-3 my-4 text-gray-400 text-xs sm:text-sm">
        <div className="flex-1 h-px bg-gray-200" />
        Don’t have account
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* CREATE ACCOUNT */}
      <button className="w-full text-sm sm:text-[15px] border border-orange-400 text-orange-500 py-2.5 rounded-md font-semibold hover:bg-orange-50">
        CREATE ACCOUNT
      </button>
    </div>
  </div>
)}



                    </div>
                </div>
            </div>
        </div>
    );
}
