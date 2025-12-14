import { useContext, useState } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { FaStar, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const FeaturedSection = () => {
  const { electronics, loading } = useContext(ElectronicsContext);
  const [active, setActive] = useState("All Product");

  if (loading) return <p>Loading...</p>;

  // Get unique categories
  const allCategories = [...new Set(electronics.map((p) => p.category))];

  // SHOW ONLY 3 categories + "All Product"
  const categoryTabs = ["All Product", ...allCategories.slice(0, 3)];

  const filtered =
    active === "All Product"
      ? electronics
      : electronics.filter((p) => p.category === active);

  return (
    <div className="flex max-w-[1220px] mx-auto gap-10 py-10">

      {/* ---------------- LEFT BANNER ---------------- */}
      <div className="w-[24%] bg-[#F3DE6D] rounded-xl p-6 flex flex-col">
        <p className="text-sm text-center text-[#BE4646] font-semibold tracking-wide">
          COMPUTER & ACCESSORIES
        </p>

        <h2 className="text-[32px] text-center font-semibold mt-2">
          32% Discount
        </h2>

        <p className="mt-1 text-center text-gray-700">For all electronics products</p>

        {/* EXACT "Offer ends in" UI FIXED */}
<div className="">
            <p className="mt-4 inline ml-[-9px] text-sm text-gray-700 font-semibold">
          Offers ends in: 
        </p>
        <span className="text-black inline p-1 text-[13px] bg-white">ENDS OF CHRISTMAS</span>
</div>
      <div className="mx-auto">
        <button className="mt-6 bg-[#FF8A35] hover:bg-[#ff7b1b] cursor-pointer px-6 py-3 text-white font-semibold rounded-lg transition">
          SHOP NOW →
        </button></div>

        <img
          src="https://png.pngtree.com/png-clipart/20240826/original/pngtree-electronics-and-gadgets-on-transparent-background-png-image_15853986.png"
          alt="banner"
          className="mt-6 rounded-lg h-[260px]"
        />
      </div>

      {/* ---------------- RIGHT CONTENT ---------------- */}
      <div className="flex-1">

        {/* -------- CATEGORY TABS -------- */}
<div className="flex items-center justify-between mb-6">

  {/* LEFT SIDE TITLE */}
  <h2 className="text-[18px] font-bold">Featured Products</h2>

  {/* RIGHT SIDE CATEGORY BUTTONS */}
  <div className="flex items-center gap-3">

    {categoryTabs.map((cat) => (
      <button
        key={cat}
        onClick={() => setActive(cat)}
        className={`pb-2 text-[14px] hover:border-b-2 hover:border-orange-400 font-medium
          ${
            active === cat
              ? " text-black"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
      >
        {cat}
      </button>
    ))}

    {/* BROWSE ALL BUTTON */}
    <button className="text-orange-500 text-sm font-semibold flex mb-[7px] items-center gap-1">
      Browse All Product →
    </button>
  </div>

</div>


        {/* -------- PRODUCT GRID -------- */}
        <div className="grid grid-cols-4 gap-6">
          {filtered.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="relative border border-[#E4E7E9] rounded-xl p-4 hover:shadow-xl transition group cursor-pointer"
            >
              {/* DISCOUNT BADGE */}
              {item.discount && (
                <span className="absolute top-3 left-3 bg-[#FFDF7E] text-black text-xs font-semibold px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}

              {/* PRODUCT IMAGE */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain"
                />

                {/* HOVER ICONS */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <button className="p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition">
                    <FaHeart size={14} />
                  </button>

                  <button className="p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition">
                    <FaShoppingCart size={14} />
                  </button>

                  <button className="p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition">
                    <FaEye size={14} />
                  </button>
                </div>
              </div>

              {/* RATING */}
              <div className="flex items-center gap-1 text-orange-400 text-xs mt-4">
                {Array.from({ length: Math.round(item.rating) }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-500 text-xs ml-1">
                  ({Math.floor(Math.random() * 800) + 100})
                </span>
              </div>

              {/* NAME */}
              <p className="font-semibold text-sm mt-1 line-clamp-2">
                {item.name}
              </p>

              {/* PRICE */}
              <p className="text-[#3A87F7] font-semibold text-sm mt-1">
                ${item.price}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
