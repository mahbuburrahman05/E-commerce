import { useParams } from "react-router";
import { useContext, useState } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { FaStar, FaHeart } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const { electronics, cart, setCart } = useContext(ElectronicsContext);

  const product = electronics.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) return <p className="text-white">Product not found</p>;

  const addToCart = () => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty }]);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-4 sm:px-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <div>
          <div className="border border-gray-700 rounded-lg p-4 sm:p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[320px] sm:h-[420px] object-contain"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 border border-gray-700 rounded flex items-center justify-center cursor-pointer hover:border-orange-500 flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          {/* RATING */}
          <div className="flex items-center gap-2 text-orange-400 text-sm">
            {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-400">{product.rating} Star Rating</span>
          </div>

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl font-semibold mt-3 leading-snug">
            {product.name}
          </h1>

          {/* META */}
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm mt-4 text-gray-400 gap-2 sm:gap-0">
            <p>Category: {product.category}</p>
            <p>
              Availability: <span className="text-green-400">In Stock</span>
            </p>
          </div>

          {/* PRICE */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-4">
            <span className="text-2xl sm:text-3xl text-blue-400 font-bold">
              ${product.price}
            </span>
            <span className="bg-yellow-400 text-black px-2 py-1 text-sm font-semibold rounded">
              21% OFF
            </span>
          </div>

          <hr className="my-4 border-gray-700" />

          {/* OPTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-black mt-2">
            <select className="p-2 rounded bg-white w-full">
              <option>{product.size}</option>
            </select>

            <select className="p-2 rounded bg-white w-full">
              <option>{product.storage}</option>
            </select>

            <select className="p-2 rounded bg-white w-full">
              <option>{product.memory}</option>
            </select>
          </div>

          {/* QTY + BUTTONS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
            <div className="flex items-center text-black border border-gray-600 rounded">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-3 sm:px-4 py-2"
              >
                −
              </button>
              <span className="px-3 sm:px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3 sm:px-4 py-2">
                +
              </button>
            </div>

            <button
              onClick={addToCart}
              className="bg-orange-500 px-6 py-2 sm:px-8 sm:py-3 font-semibold rounded hover:bg-orange-600 transition"
            >
              ADD TO CART
            </button>

            <button className="border border-orange-500 px-6 py-2 sm:px-8 sm:py-3 font-semibold rounded text-orange-500 hover:bg-orange-500 hover:text-black transition">
              BUY NOW
            </button>
          </div>

          {/* WISHLIST */}
          <div className="flex items-center gap-2 mt-3 text-gray-400 cursor-pointer hover:text-orange-400">
            <FaHeart />
            <span>Add to Wishlist</span>
          </div>

          {/* SAFE CHECKOUT */}
          <div className="mt-4 border border-gray-700 rounded p-3 text-sm">
            <p className="mb-2">100% Guarantee Safe Checkout</p>
            <div className="flex gap-2">
              <img src="https://i.imgur.com/Z5X8X.png" className="h-5 sm:h-6" />
              <img src="https://i.imgur.com/Z5X8X.png" className="h-5 sm:h-6" />
              <img src="https://i.imgur.com/Z5X8X.png" className="h-5 sm:h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
