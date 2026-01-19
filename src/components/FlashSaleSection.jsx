import { useContext } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { Link } from "react-router";

const FlashSaleSection = () => {
  const { electronics, loading } = useContext(ElectronicsContext);
  if (loading) return <p className="text-center py-10">Loading...</p>;

  const flashSale = electronics.slice(0, 3);
  const bestSellers = electronics.slice(3, 6);
  const topRated = electronics.slice(6, 9);
  const newArrival = electronics.slice(9, 12);

  const sections = [
    { title: "FLASH SALE TODAY", items: flashSale },
    { title: "BEST SELLERS", items: bestSellers },
    { title: "TOP RATED", items: topRated },
    { title: "NEW ARRIVAL", items: newArrival },
  ];

  return (
    <div className="max-w-[1220px] mx-auto py-16 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {sections.map((sec) => (
          <div key={sec.title}>
            {/* SECTION TITLE */}
            <h2 className="text-sm sm:text-[14px] font-semibold text-gray-700 mb-4">
              {sec.title}
            </h2>

            <div className="flex flex-col gap-3">
              {sec.items.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <div
                    className="border border-[#E4E7E9] rounded-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4
                               hover:shadow-md transition cursor-pointer"
                  >
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />

                    {/* NAME + PRICE */}
                    <div className="flex-1">
                      <p className="text-xs sm:text-[14px] font-medium leading-5 line-clamp-2">
                        {item.name}
                      </p>

                      <p className="text-[#3A87F7] font-semibold mt-1 text-sm sm:text-base">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FlashSaleSection;
