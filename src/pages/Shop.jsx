import { useContext, useEffect, useState } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { FaStar, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import PriceRange from "../components/PriceRange";
import PopularBrands from "../components/Brands";
import { Link } from "react-router";

const FeaturedSection = () => {
  const { electronics, loading, cart, setCart } =
    useContext(ElectronicsContext);

  const [active, setActive] = useState("All Product");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 28;

  const HandleaddToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [active]);

  if (loading) return <p>Loading...</p>;

  const allCategories = [...new Set(electronics.map((p) => p.category))];

  const filteredProducts =
    active === "All Product"
      ? electronics
      : electronics.filter((p) => p.category === active);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div>
      <Link to="/cart" className="text-sm text-blue-500 underline ml-4">
        Home
      </Link>

      {/* MAIN WRAPPER */}
      <div className="flex flex-col lg:flex-row max-w-[1220px] mx-auto gap-6 lg:gap-10 py-6 lg:py-10 px-4 lg:px-0">

        {/* LEFT SIDEBAR */}
        <div className="w-full lg:w-[24%] rounded-xl p-4 lg:p-6 flex flex-col">

          {/* CATEGORY */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold mb-4 uppercase">Category</h3>

            {allCategories.map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-3 cursor-pointer py-1"
                onClick={() => setActive(cat)}
              >
                <span
                  className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center
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

                <label
                  className={`text-sm sm:text-[16px] font-medium select-none
                  ${
                    active === cat ? "text-black" : "text-[#475156]"
                  }`}
                >
                  {cat}
                </label>
              </div>
            ))}
          </div>

          <PriceRange
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />

          <PopularBrands
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
          />

          {/* TAGS */}
          <div className="text-black mt-5">
            <h3 className="font-semibold mb-4 text-[16px]">POPULAR TAG</h3>

            <div className="flex flex-wrap gap-1">
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
                "Samsung",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-sm px-3 py-1 border border-[#E4E7E9] rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* PROMO CARD */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white rounded border-2 border-[#FFE7D6] shadow-sm p-5 text-center w-full">
              <img
                src="https://www.pngkey.com/png/full/182-1829682_on-apple-watch.png"
                alt="Apple Watch"
                className="w-40 mx-auto mb-4 object-contain"
              />

              <h2 className="text-lg font-semibold">
                <span className="font-bold">WATCH</span>
              </h2>
              <p className="text-sm font-semibold text-red-600">
                SERIES 7
              </p>

              <p className="text-sm sm:text-lg font-semibold mt-2">
                Heavy on Features.<br />Light on Price.
              </p>

              <p className="text-sm text-gray-500 mt-3">
                Only for:
                <span className="bg-yellow-200 px-3 py-1 ml-2 rounded-md font-semibold">
                  $299 USD
                </span>
              </p>

              <div className="space-y-2 mt-4">
                <button className="w-full text-sm bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">
                  🛒 ADD TO CART
                </button>

                <button className="w-full text-sm border-2 border-orange-500 text-orange-500 py-3 rounded-lg hover:bg-orange-50">
                  VIEW DETAILS →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {paginatedProducts.map((item) => (
              <div
                key={item.id}
                className="relative border border-[#E4E7E9] rounded-xl p-4 hover:shadow-xl transition group"
              >
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-[#FFDF7E] text-xs font-semibold px-2 py-1 rounded">
                    {item.discount}
                  </span>
                )}

                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 sm:h-36 lg:h-40 object-contain"
                  />
                </Link>

                {/* HOVER ICONS (DESKTOP ONLY) */}
                <div className="absolute inset-0 hidden lg:flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <button className="p-2 bg-white rounded-full shadow">
                    <FaHeart size={14} />
                  </button>

                  <button
                    onClick={() => HandleaddToCart(item)}
                    className="p-2 bg-white rounded-full shadow"
                  >
                    <FaShoppingCart size={14} />
                  </button>

                  <Link to={`/product/${item.id}`}>
                    <button className="p-2 bg-white rounded-full shadow">
                      <FaEye size={14} />
                    </button>
                  </Link>
                </div>

                <div className="flex items-center gap-1 text-orange-400 text-xs mt-3">
                  {Array.from({
                    length: Math.round(item.rating),
                  }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <Link to={`/product/${item.id}`}>
                  <p className="font-semibold text-sm mt-1 line-clamp-2 hover:text-orange-500">
                    {item.name}
                  </p>
                </Link>

                <p className="text-[#3A87F7] font-semibold text-sm mt-1">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 mb-10 px-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="w-9 h-9 border rounded-full"
        >
          ‹
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-9 h-9 rounded-full ${
              currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "border"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          className="w-9 h-9 border rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
