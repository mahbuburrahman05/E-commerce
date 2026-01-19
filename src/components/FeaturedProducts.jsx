import { useContext, useState } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { FaStar, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const FeaturedSection = () => {
  const { electronics, loading, cart, setCart } = useContext(ElectronicsContext);
  const [active, setActive] = useState("All Product");

  const HandleaddToCart = (product) => {
    setCart([...cart, product]);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  const allCategories = [...new Set(electronics.map((p) => p.category))];
  const categoryTabs = ["All Product", ...allCategories.slice(0, 3)];
  const filtered =
    active === "All Product"
      ? electronics
      : electronics.filter((p) => p.category === active);

  return (
    <div className="flex flex-col lg:flex-row max-w-[1220px] mx-auto gap-6 lg:gap-10 py-8 px-4 sm:px-6">

      {/* ---------------- LEFT BANNER ---------------- */}
      <div className="w-full lg:w-[24%] bg-[#F3DE6D] rounded-xl p-4 sm:p-6 flex flex-col items-center">
        <p className="text-sm text-center text-[#BE4646] font-semibold tracking-wide">
          COMPUTER & ACCESSORIES
        </p>

        <h2 className="text-xl sm:text-2xl md:text-[32px] text-center font-semibold mt-2">
          32% Discount
        </h2>

        <p className="mt-1 text-center text-gray-700 text-sm sm:text-base">
          For all electronics products
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
          <p className="text-sm text-gray-700 font-semibold">Offers ends in:</p>
          <span className="text-black text-xs sm:text-[13px] px-2 py-1 bg-white rounded">
            ENDS OF CHRISTMAS
          </span>
        </div>

        <button className="mt-4 sm:mt-6 bg-[#FF8A35] hover:bg-[#ff7b1b] cursor-pointer px-6 py-2 text-white font-semibold rounded-lg transition">
          SHOP NOW →
        </button>

        <img
          src="https://png.pngtree.com/png-clipart/20240826/original/pngtree-electronics-and-gadgets-on-transparent-background-png-image_15853986.png"
          alt="banner"
          className="mt-4 sm:mt-6 rounded-lg h-[200px] sm:h-[260px] object-contain"
        />
      </div>

      {/* ---------------- RIGHT CONTENT ---------------- */}
      <div className="flex-1">

        {/* -------- CATEGORY TABS -------- */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
          <h2 className="text-lg sm:text-[18px] font-bold">Featured Products</h2>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
            {categoryTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`pb-1 sm:pb-2 text-xs sm:text-[14px] font-medium
                  hover:border-b-2 hover:border-orange-400
                  ${active === cat ? "text-black" : "border-transparent text-gray-500 hover:text-black"}`}
              >
                {cat}
              </button>
            ))}

            <button className="text-orange-500 text-xs sm:text-sm font-semibold flex items-center gap-1">
              Browse All Product →
            </button>
          </div>
        </div>

        {/* -------- PRODUCT GRID -------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="relative border border-[#E4E7E9] rounded-xl p-3 sm:p-4 hover:shadow-xl transition group cursor-pointer"
            >
              {item.discount && (
                <span className="absolute top-3 left-3 bg-[#FFDF7E] text-black text-xs font-semibold px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}

              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-36 sm:h-40 object-contain"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button className="p-2 sm:p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition">
                    <FaHeart size={14} />
                  </button>
                  <button
                    onClick={() => HandleaddToCart(item)}
                    className="p-2 sm:p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition"
                  >
                    <FaShoppingCart size={14} />
                  </button>
                  <button className="p-2 sm:p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition">
                    <FaEye size={14} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-1 text-orange-400 text-xs mt-2">
                {Array.from({ length: Math.round(item.rating) }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-500 text-xs ml-1">
                  ({Math.floor(Math.random() * 800) + 100})
                </span>
              </div>

              <p className="font-semibold text-sm mt-1 line-clamp-2">{item.name}</p>
              <p className="text-[#3A87F7] font-semibold text-sm mt-1">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
