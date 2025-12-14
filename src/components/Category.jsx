import Slider from "react-slick";
import { useContext } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-18px] text-white top-1/2 -translate-y-1/2 z-10 bg-[#FA8232] p-3 rounded-full shadow cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

// Custom Prev Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-18px] top-1/2 text-white -translate-y-1/2 z-10 bg-[#FA8232] p-3 rounded-full shadow cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

const Category = () => {
  const { categories, loading } = useContext(ElectronicsContext);

  if (loading) return <p>Loading...</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6, // number of categories you want to show
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="relative max-w-[1220px] mx-auto px-10 ">
      <h1 className="text-center text-[32px] font-semibold mb-8">Shop with Categorys</h1>
      <Slider {...settings}>
        {categories.map((cat) => (
          <div key={cat.category} className="p-1">
            <div className="border border-gray-300 rounded-xl h-40 overflow-hidden bg-white">
              <img
                src={cat.categoryImage}
                alt={cat.category}
                className="w-[40%] h-[40%] rounded-2xl mx-auto mt-4 object-contain"
              />
              <h3 className="text-center py-3 font-semibold text-lg">
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
