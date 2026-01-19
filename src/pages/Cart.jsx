import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { ElectronicsContext } from "../Root/ProductProvider";
import { Link } from "react-router";
import { useState } from "react";

const Cart = () => {
  const { cart, setCart } = useContext(ElectronicsContext);

  // per-item quantities
  const [qtyMap, setQtyMap] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: item.qty || 1 }), {})
  );

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    const newQtyMap = { ...qtyMap };
    delete newQtyMap[id];
    setQtyMap(newQtyMap);
  };

  const increaseQty = (id) => {
    setQtyMap((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decreaseQty = (id) => {
    setQtyMap((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));
  };

  const subtotall = cart.reduce(
    (acc, item) => acc + item.price * (qtyMap[item.id] || 1),
    0
  );

  const totallPrice = subtotall + 0 + 24 + 19;

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT CART */}
        <div className="lg:w-3/4 border border-blue-400 rounded-md p-6">
          <h2 className="font-semibold text-lg mb-6">Shopping Cart</h2>

          {/* HEADER */}
          <div className="hidden md:grid grid-cols-5 text-sm text-gray-500 border-b pb-3">
            <span className="col-span-2">Products</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Sub-Total</span>
          </div>

          {cart.length === 0 && (
            <p className="text-center text-2xl text-amber-400 mt-6">
              Cart is empty
            </p>
          )}

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-5 items-center py-6 border-b gap-4 md:gap-0"
            >
              {/* PRODUCT INFO */}
              <div className="flex col-span-2 items-center gap-4 w-full">
                <FaTrash
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 cursor-pointer"
                />
                <img
                  src={item.image}
                  className="w-16 h-16 object-contain"
                  alt=""
                />
                <p className="text-sm font-medium">{item.name}</p>
              </div>

              {/* PRICE */}
              <p className="md:text-center">${item.price}</p>

              {/* QUANTITY */}
              <div className="flex items-center border w-fit mx-auto md:mx-0">
                <button
                  className="px-3 py-1"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <span className="px-4">{qtyMap[item.id]}</span>
                <button
                  className="px-3 py-1"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              {/* SUBTOTAL */}
              <p className="md:text-center">
                ${item.price * qtyMap[item.id]}
              </p>
            </div>
          ))}

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row justify-between mt-6 gap-3">
            <Link
              to="/"
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded text-center"
            >
              ← RETURN TO SHOP
            </Link>

            <Link
              to="/cart"
              className="bg-blue-500 text-white px-6 py-2 rounded text-center"
            >
              UPDATE CART
            </Link>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="lg:w-1/4 flex flex-col gap-6">

          {/* CART TOTALS */}
          <div className="border rounded-md p-6">
            <h3 className="font-semibold mb-4">Cart Totals</h3>

            <div className="flex justify-between text-sm mb-2">
              <span>Sub-total</span>
              <span>${subtotall.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Discount</span>
              <span>$24</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span>Tax</span>
              <span>$19</span>
            </div>

            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total</span>
              <span>${totallPrice.toFixed(2)} USD</span>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded font-semibold">
              PROCEED TO CHECKOUT →
            </button>
          </div>

          {/* COUPON */}
          <div className="border rounded-md p-6">
            <h3 className="font-semibold mb-4">Coupon Code</h3>

            <input
              type="text"
              placeholder="Email address"
              className="w-full border px-3 py-2 mb-4 rounded"
            />

            <button className="w-full bg-blue-500 text-white py-2 rounded">
              APPLY COUPON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
