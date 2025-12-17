import { useContext } from "react";
import { ElectronicsContext } from "../Root/ProductProvider";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const MiniCart = () => {
  const { cart, setCart } = useContext(ElectronicsContext);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="absolute top-8 right-0 w-[360px] bg-white rounded-lg shadow-2xl p-5 z-50">
      {/* HEADER */}
      <h3 className="text-[16px] text-black font-semibold mb-4">
        Shopping Cart ({cart.length.toString().padStart(2, "0")})
      </h3>

      <div className="border-b mb-4"></div>

      {/* CART ITEMS */}
      <div className="space-y-4 max-h-[280px] overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-[56px] h-[56px] object-contain border rounded"
            />

            {/* INFO */}
            <div className="flex-1">
              <p className="text-[14px] leading-snug line-clamp-2">
                {item.name}
              </p>
              <p className="text-[14px] mt-1">
                {item.qty} x{" "}
                <span className="text-blue-500 font-semibold">
                  ${item.price}
                </span>
              </p>
            </div>

            {/* REMOVE */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      {/* SUBTOTAL */}
      <div className="flex justify-between items-center mt-5 text-[15px] font-medium">
        <span>Sub-Total:</span>
        <span>${subTotal.toFixed(2)} USD</span>
      </div>

      {/* BUTTONS */}
      <Link className="w-full text-[14px] mt-4 bg-orange-500 text-white py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition">
        CHECKOUT NOW →
      </Link>

      <Link to="/cart" className="w-full text-[14px] mt-3 border border-orange-500 text-orange-400 py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition">
        VIEW CART
      </Link>
    </div>
  );
};

export default MiniCart;
