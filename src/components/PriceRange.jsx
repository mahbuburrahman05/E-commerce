import { useState } from "react";

const PriceRange = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const ranges = [
    { label: "All Price", min: 0, max: 10000 },
    { label: "Under $20", min: 0, max: 20 },
    { label: "$25 to $100", min: 25, max: 100 },
    { label: "$100 to $300", min: 100, max: 300 },
    { label: "$300 to $500", min: 300, max: 500 },
    { label: "$500 to $1,000", min: 500, max: 1000 },
    { label: "$1,000 to $10,000", min: 1000, max: 10000 },
  ];

  return (
    <div className="text-black w-full">
      {/* TITLE */}
      <h3 className="text-sm font-semibold mb-4 uppercase">Price Range</h3>

      {/* SLIDER */}
      <div className="relative mb-4">
        <input
          type="range"
          min="0"
          max="10000"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <input
          type="range"
          min="0"
          max="10000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-orange-500 mt-2"
        />
      </div>

      {/* MIN / MAX INPUT */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full sm:w-1/2 px-3 py-2 rounded text-sm text-black"
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full sm:w-1/2 px-3 py-2 rounded text-sm text-black"
        />
      </div>

      {/* RADIO PRICE LIST */}
      <div className="flex flex-col gap-3">
        {ranges.map((r, i) => {
          const active = minPrice === r.min && maxPrice === r.max;
          return (
            <div
              key={i}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                setMinPrice(r.min);
                setMaxPrice(r.max);
              }}
            >
              {/* CUSTOM RADIO */}
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                  ${active ? "border-orange-500" : "border-gray-400"}`}
              >
                {active && (
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                )}
              </span>

              <span className={`text-sm ${active ? "text-black" : "text-gray-600"}`}>
                {r.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceRange;
