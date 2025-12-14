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

  const filtered =
    active === "All Product"
      ? electronics
      : electronics.filter((p) => p.category === active);

  return (
    <div className="flex max-w-[1220px] mx-auto gap-10 py-10">

      {/* ---------------- LEFT BANNER ---------------- */}
      <div className="w-[24%] rounded-xl p-6 flex flex-col">
    {allCategories.map((cat) => (
<div
  key={cat}
  className="flex items-center gap-3 cursor-pointer py-[6px]"
  onClick={() => setActive(cat)}
>
  {/* Custom Radio */}
  <span
    className={`w-[18px] h-[18px] rounded-full border-[2px] flex items-center justify-center
      ${
        active === cat
          ? "border-orange-500"
          : "border-gray-400"
      }`}
  >
    {active === cat && (
      <span className="w-[10px] h-[10px] bg-orange-500 rounded-full"></span>
    )}
  </span>

  {/* Label */}
  <label
    htmlFor={cat}
    className={`text-[16px] font-medium select-none
      ${
        active === cat
          ? "text-black"
          : "text-[#475156]"
      }`}
  >
    {cat}
  </label>

  {/* Hidden original radio */}
  <input
    type="radio"
    id={cat}
    name="category"
    className="hidden"
  />
</div>

    ))}
      </div>

      {/* ---------------- RIGHT CONTENT ---------------- */}
      <div className="flex-1">

        {/* -------- CATEGORY TABS -------- */}
<div className="flex items-center justify-between mb-6">

  {/* LEFT SIDE TITLE */}
  <h2 className="text-[18px] font-bold">Featured Products</h2>

  {/* RIGHT SIDE CATEGORY BUTTONS */}
  <div className="flex items-center gap-3">

    {/* BROWSE ALL BUTTON */}
    <button className="text-orange-500 text-sm font-semibold flex mb-[7px] items-center gap-1">
      Browse All Product →
    </button>
  </div>

</div>


        {/* -------- PRODUCT GRID -------- */}
        <div className="grid grid-cols-4 gap-6">
          {filtered.map((item) => (
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
