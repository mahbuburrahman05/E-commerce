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
    <div className="mt-8 text-black">
      {/* TITLE */}
      <h3 className="text-sm font-semibold mb-4 uppercase">Popular Brands</h3>

      {/* TWO COLUMN GRID */}
      <div className="grid grid-cols-2 gap-y-3">
        {brands.map((brand) => {
          const active = selectedBrands.includes(brand);

          return (
            <div
              key={brand}
              onClick={() => toggleBrand(brand)}
              className="flex items-center gap-3 cursor-pointer"
            >
              {/* CUSTOM CHECKBOX */}
              <span
                className={`w-4 h-4 border-2 flex items-center justify-center
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
                className={`text-sm ${
                  active ? "text-black" : "text-gray-800"
                }`}
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
