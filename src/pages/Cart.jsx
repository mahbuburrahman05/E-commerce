import { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ElectronicsContext } from "../Root/ProductProvider";
import { Link } from "react-router";

const Cart = () => {
      const { cart, setCart } = useContext(ElectronicsContext);
      console.log("Cart in Cart Page:", cart);
        const handleDelete = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty(prev => prev + 1);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(prev => prev - 1);
    }
  };
   let subtotall = cart.reduce((acc, item) => acc + item.price, 0);
    let totallPrice = subtotall + 0 + 24 + 19; // Assuming shipping is 0, discount is 24, and tax is 19
  return (
    <div className="max-w-[1200px] mx-auto py-10 flex gap-8">

      {/* ================= LEFT CART ================= */}
      <div className="w-[72%] border border-blue-400 rounded-md p-6">

        <h2 className="font-semibold text-lg mb-6">Shopping Cart</h2>

        {/* HEADER */}
        <div className="grid grid-cols-5 text-sm text-gray-500 border-b pb-3">
          <span className="col-span-2">Products</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Sub-Total</span>
        </div>
      {cart.length === 0 && <p className="text-center text-2xl text-amber-400">Cart is empty</p>}

        {/* PRODUCT 1 */}
        {cart.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center py-6 border-b"
          >
            <div className="col-span-2 flex items-center gap-4">
              <FaTrash  onClick={() => handleDelete(item.id)}  className="text-red-500 cursor-pointer" />
              <img
                src={item.image}
                className="w-16 h-16 object-contain"
                alt=""
              />
              <p className="text-sm font-medium">{item.name}</p>
            </div>

            <p>${item.price}</p>

            <div className="flex items-center border w-fit">
              <button className="px-3 py-1" onClick={() => decreaseQty(item.id)}>-</button>
              <span className="px-4">{qty}</span>
              <button className="px-3 py-1" onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <p>${item.price}</p>
          </div>
        ))}

        <div className="flex justify-between mt-6">
          <Link to="/" className="border border-blue-500 text-blue-500 px-6 py-2 rounded">
            ← RETURN TO SHOP
          </Link>

          <Link to="/cart" className="bg-blue-500 text-white px-6 py-2 rounded">
            UPDATE CART
          </Link>
        </div>
      </div>

      {/* ================= RIGHT SUMMARY ================= */}
      <div className="w-[28%] space-y-6">

        {/* CART TOTALS */}
        <div className="border rounded-md p-6">
          <h3 className="font-semibold mb-4">Cart Totals</h3>

          <div className="flex justify-between text-sm mb-2">
            <span>Sub-total</span>
            <span>{subtotall}</span>
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
            <span>{totallPrice} USD</span>
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
  );
};

export default Cart;
