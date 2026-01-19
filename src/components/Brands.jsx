import { useState } from "react";

const brands = [
  "Apple",
  "Microsoft",
  "Dell",
  "Symphony",
  "Sony",
  "LG",
  "One Plus",
  "Google",
  "Samsung",
  "HP",
  "Xiaomi",
  "Panasonic",
  "Intel",
];

const PopularBrands = ({ selectedBrands, setSelectedBrands }) => {
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="mt-6 md:mt-8 text-black">
      {/* TITLE */}
      <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase">
        Popular Brands
      </h3>

      {/* RESPONSIVE GRID */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                   gap-y-3 gap-x-4"
      >
        {brands.map((brand) => {
          const active = selectedBrands.includes(brand);

          return (
            <div
              key={brand}
              onClick={() => toggleBrand(brand)}
              className="flex items-center gap-3 cursor-pointer
                         py-1 px-1 rounded
                         hover:bg-gray-100 transition"
            >
              {/* CUSTOM CHECKBOX */}
              <span
                className={`w-4 h-4 min-w-[16px] border-2 flex items-center justify-center
                  ${
                    active
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-400"
                  }`}
              >
                {active && (
                  <span className="text-white text-[10px] font-bold">✓</span>
                )}
              </span>

              {/* BRAND NAME */}
              <span
                className={`text-xs sm:text-sm leading-none
                  ${active ? "text-black" : "text-gray-800"}`}
              >
                {brand}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularBrands;
