import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0)
    return (
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-stone-400 text-sm mb-4">Your cart is empty.</p>
        <Link
          to="/"
          className="text-sm bg-stone-800 text-white px-6 py-2.5 rounded-full hover:bg-stone-700 transition"
        >
          Continue Shopping
        </Link>
      </main>
    );

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-stone-800 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border border-stone-100 rounded-2xl p-4 bg-white"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl bg-stone-50"
              />

              {/* Info */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">
                    {item.category}
                  </p>
                  <h3 className="text-sm font-medium text-stone-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-stone-500 mt-0.5">${item.price}</p>
                </div>

                {/* Quantity + Remove */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 border border-stone-200 rounded-full px-3 py-1">
                    <button
                      onClick={() =>
                        item.quantity === 1
                          ? dispatch(removeFromCart(item.id))
                          : dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1,
                              }),
                            )
                      }
                      className="text-stone-500 hover:text-stone-800 text-base"
                    >
                      −
                    </button>
                    <span className="text-sm text-stone-700 w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          }),
                        )
                      }
                      className="text-stone-500 hover:text-stone-800 text-base"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-xs text-red-400 hover:text-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={() => dispatch(clearCart())}
            className="text-xs text-stone-400 hover:text-red-500 transition self-start mt-2"
          >
            Clear cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-stone-100 rounded-2xl p-6 h-fit sticky top-24">
          <h2 className="text-lg font-semibold text-stone-800 mb-6">
            Order Summary
          </h2>

          <div className="flex flex-col gap-3 text-sm text-stone-600">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span className="line-clamp-1 flex-1 pr-2">
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-100 mt-4 pt-4 flex justify-between font-semibold text-stone-800">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-stone-800 hover:bg-stone-700 text-white text-sm py-3 rounded-full transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
