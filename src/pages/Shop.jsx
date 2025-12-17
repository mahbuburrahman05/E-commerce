import { useContext, useEffect, useState } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { FaStar, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import PriceRange from "../components/PriceRange";
import PopularBrands from "../components/Brands";
import { Link } from "react-router";

const FeaturedSection = () => {
  const { electronics, loading } = useContext(ElectronicsContext);
  const [active, setActive] = useState("All Product");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const ITEMS_PER_PAGE = 28;
  const { cart, setCart } = useContext(ElectronicsContext);
  console.log("Cart Items:", cart);


  const [currentPage, setCurrentPage] = useState(1);
  const HandleaddToCart = (product) => {
    setCart([...cart, product]);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [active]);


  if (loading) return <p>Loading...</p>;

  // Get unique categories
  const allCategories = [...new Set(electronics.map((p) => p.category))];

  // SHOW ONLY 3 categories + "All Product"

  const filteredProducts =
    active === "All Product"
      ? electronics
      : electronics.filter((p) => p.category === active);

  // pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);


  return (
    <div>
      <Link to="/cart" className="text-sm text-blue-500 underline ml-10">
         Home
      </Link>
      <div className="flex max-w-[1220px] mx-auto gap-10  py-10">

        {/* ---------------- LEFT BANNER ---------------- */}
        <div className="w-[24%] rounded-xl p-6 flex flex-col">

          <div className="mb-5">
            <h3 className="text-sm font-semibold mb-4 uppercase">Category</h3>

            {allCategories.map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-3 cursor-pointer py-[6px]"
                onClick={() => setActive(cat)}
              >
                {/* Custom Radio */}
                <span
                  className={`w-[18px] h-[18px] rounded-full border-[2px] flex items-center justify-center
      ${active === cat
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
      ${active === cat
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
          <PriceRange
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice} />
          <PopularBrands
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
          />
          <div className='text-black mt-5'>
            <h3 className="text-black font-semibold mb-4 text-[16px]">POPULAR TAG</h3>

            <div className="flex flex-wrap gap-1 max-w-[400px]">
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
                  className="text-sm px-3 py-1  border border-[#E4E7E9] rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <div className=" bg-white rounded border-2 border-[#FFE7D6] shadow-sm p-5 text-center">


              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src="https://www.pngkey.com/png/full/182-1829682_on-apple-watch.png"
                  alt="Apple Watch Series 7"
                  className="w-56 object-contain"
                />
              </div>


              {/* Title */}
              <div className="mb-3">
                <h2 className="text-xl font-semibold tracking-wide">
                  <span className="font-bold">WATCH</span>
                </h2>
                <p className="text-sm font-semibold text-red-600 tracking-widest">
                  SERIES 7
                </p>
              </div>


              {/* Description */}
              <p className="text-lg font-semibold text-gray-900 leading-snug mb-3">
                Heavy on Features.<br />
                Light on Price.
              </p>


              {/* Price */}
              <p className="text-sm text-gray-500 mb-5">
                Only for:{" "}
                <span className="inline-block bg-yellow-200 text-gray-900 font-semibold px-3 py-1 rounded-md ml-1">
                  $299 USD
                </span>
              </p>


              {/* Buttons */}
              <div className="space-y-3">
                <button className="w-full text-[14px] flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition">
                  <span>🛒</span>
                  ADD TO CART
                </button>


                <button className="w-full text-[14px] flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 font-semibold py-3 rounded-lg hover:bg-orange-50 transition">
                  VIEW DETAILS <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT CONTENT ---------------- */}
        <div className="flex-1">

          {/* -------- CATEGORY TABS -------- */}



          {/* -------- PRODUCT GRID -------- */}
<div className="grid grid-cols-4 gap-6">
  {paginatedProducts.map((item) => (
    <div
      key={item.id}
      className="relative border border-[#E4E7E9] rounded-xl p-4 hover:shadow-xl transition group"
    >
      {/* DISCOUNT BADGE */}
      {item.discount && (
        <span className="absolute top-3 left-3 bg-[#FFDF7E] text-black text-xs font-semibold px-2 py-1 rounded">
          {item.discount}
        </span>
      )}

      {/* IMAGE */}
      <Link to={`/product/${item.id}`}>
        <div className="relative cursor-pointer">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-contain"
          />
        </div>
      </Link>

      {/* HOVER ICONS */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="flex gap-3 pointer-events-auto">
          <button className="p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition">
            <FaHeart size={14} />
          </button>

          <button
            onClick={() => HandleaddToCart(item)}
            className="p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition"
          >
            <FaShoppingCart size={14} />
          </button>

          {/* VIEW PRODUCT */}
          <Link to={`/product/${item.id}`}>
            <button className="p-[10px] bg-white shadow rounded-full hover:bg-orange-400 hover:text-white transition">
              <FaEye size={14} />
            </button>
          </Link>
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
      <Link to={`/product/${item.id}`}>
        <p className="font-semibold text-sm mt-1 line-clamp-2 hover:text-orange-500 cursor-pointer">
          {item.name}
        </p>
      </Link>

      {/* PRICE */}
      <p className="text-[#3A87F7] font-semibold text-sm mt-1">
        ${item.price}
      </p>
    </div>
  ))}
</div>

        </div>
      </div>
      <div className="flex mt-[-21px] justify-center ml-50 gap-3 mb-10">

        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          className="w-9 h-9 border rounded-full"
        >
          ‹
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-9 h-9 rounded-full 
        ${currentPage === i + 1 ? "bg-orange-500 text-white" : "border"}
      `}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          className="w-9 h-9 border rounded-full"
        >
          ›
        </button>

      </div>

    </div>
  );
};

export default FeaturedSection;
