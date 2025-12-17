import React from "react";
import icon from "../assets/icon.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 px-10">

      {/* 🔥 MAIN FLEX — ALL SECTIONS IN ONE ROW */}
      <div className="max-w-7xl mx-auto flex justify-between items-start gap-12">

        {/* 1️⃣ LEFT: LOGO + CONTACT */}
        <div className="w-[22%]">
          <div className="flex items-center gap-3 mb-6">
            <img src={icon} alt="logo" className="w-8 h-8 object-cover" />
            <h2 className="text-white text-2xl font-semibold">CLICON</h2>
          </div>

          <p className="text-sm mb-1 font-medium">Customer Supports:</p>
          <p className="text-lg font-semibold text-white mb-4">(629) 555-0129</p>

          <p className="text-sm leading-relaxed">
            4517 Washington Ave. <br />
            Manchester, Kentucky 39495
          </p>

          <p className="text-sm mt-4">info@kinbo.com</p>
        </div>

        {/* 2️⃣ TOP CATEGORY */}
        <div className="w-[15%]">
          <h3 className="text-white font-semibold mb-4 text-[16px]">TOP CATEGORY</h3>

          <ul className="space-y-2 text-sm">
            <li>Computer & Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              Accessories
            </li>
            <li>Camera & Photo</li>
            <li>TV & Homes</li>
          </ul>
        </div>

        {/* 3️⃣ QUICK LINKS */}
        <div className="w-[15%]">
          <h3 className="text-white font-semibold mb-4 text-[16px]">QUICK LINKS</h3>

          <ul className="space-y-2 text-sm">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>Customer Help</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* 4️⃣ DOWNLOAD APP */}
        <div className="w-[18%]">
          <h3 className="text-white font-semibold mb-4 text-[16px]">DOWNLOAD APP</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-[#161718] border border-[#222] p-4 rounded-lg w-[180px]">
              <div className="w-10 h-10  rounded">< FaGooglePlay className="text-3xl ml-1 mt-1"/>
</div>
              <div>
                <p className="text-xs">Get it now</p>
                <p className="font-semibold text-white text-sm">Google Play</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#161718] border border-[#222] p-4 rounded-lg w-[180px]">
              <div className="w-10 h-10 rounded"><FaApple  className="text-3xl ml-1 mt-1" />
</div>
              <div>
                <p className="text-xs">Get it now</p>
                <p className="font-semibold text-white text-sm">App Store</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5️⃣ POPULAR TAG (IN SAME ROW — EXACT) */}
        <div className="w-[25%]">
          <h3 className="text-white font-semibold mb-4 text-[16px]">POPULAR TAG</h3>

          <div className="flex flex-wrap gap-3 max-w-[300px]">
            {[
              "Game",
              "iPhone",
              "TV",
              "Asus Laptops",
              "Macbook",
              "SSD",
              "Graphics Card",
              "Power Bank",
              "Smart TV",
              "Speaker",
              "Tablet",
              "Microwave",
              "Samsung"
            ].map((item) => (
              <span
                key={item}
                className="text-sm px-3 py-1 bg-[#161718] border border-[#222] rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm mt-14 text-gray-500 pt-6 border-t border-[#222]">
        Kinbo - eCommerce Template © 2025. Developed by Mahbubur Rahman Sujon
      </div>
    </footer>
  );
};

export default Footer;
