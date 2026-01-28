import Slider from "react-slick";
import { useContext } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/* ---------- Custom Arrows ---------- */
function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2
                 bg-[#FA8232] text-white p-3 rounded-full shadow
                 cursor-pointer z-10"
    >
      <FaArrowRight />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2
                 bg-[#FA8232] text-white p-3 rounded-full shadow
                 cursor-pointer z-10"
    >
      <FaArrowLeft />
    </div>
  );
}

const Category = () => {
  const { categories, loading } = useContext(ElectronicsContext);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    /* 🔑 MOBILE BREAKPOINTS (max-width based) */
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="relative max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-10">
      <h1
        className="text-center text-xl sm:text-2xl lg:text-[32px]
                   font-semibold mb-6 sm:mb-8"
      >
        Shop with Categories
      </h1>

      <Slider {...settings}>
        {categories.map((cat) => (
          <div key={cat.category} className="px-2">
            <div
              className="border border-gray-300 rounded-xl bg-white
                         h-36 sm:h-40
                         flex flex-col items-center justify-between
                         hover:shadow-md transition"
            >
              <img
                src={cat.categoryImage}
                alt={cat.category}
                className="w-20 h-20 sm:w-24 sm:h-24 mt-4 object-contain"
              />

              <h3
                className="text-center pb-3 font-semibold
                           text-sm sm:text-base"
              >
                {cat.category}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;