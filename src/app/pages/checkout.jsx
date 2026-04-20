import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../features/orders/ordersSlice";
import { clearCart } from "../features/cart/cartSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    payment: "card",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.zip.trim()) newErrors.zip = "ZIP code is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(placeOrder({ items, total }));
    dispatch(clearCart());
    navigate("/orders");
  };

  if (items.length === 0) {
    navigate("/");
    return null;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-stone-800 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="flex flex-col gap-5">
          <h2 className="text-sm font-medium text-stone-600 uppercase tracking-widest">
            Shipping Details
          </h2>

          {[
            {
              label: "Full Name",
              name: "fullName",
              type: "text",
              placeholder: "John Doe",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "john@example.com",
            },
            {
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "123 Main St",
            },
            { label: "City", name: "city", type: "text", placeholder: "Lagos" },
            {
              label: "ZIP Code",
              name: "zip",
              type: "text",
              placeholder: "100001",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="flex flex-col gap-1">
              <label className="text-xs text-stone-500">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={`border rounded-xl px-4 py-2.5 text-sm outline-none text-stone-700 placeholder:text-stone-300 transition
                  ${errors[name] ? "border-red-400" : "border-stone-200 focus:border-stone-400"}`}
              />
              {errors[name] && (
                <p className="text-xs text-red-400">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Payment Method */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-stone-500">Payment Method</label>
            <div className="flex gap-3">
              {["card", "transfer", "cash"].map((method) => (
                <button
                  key={method}
                  onClick={() => setForm({ ...form, payment: method })}
                  className={`flex-1 py-2.5 rounded-xl text-sm border transition capitalize
                    ${
                      form.payment === method
                        ? "bg-stone-800 text-white border-stone-800"
                        : "border-stone-200 text-stone-500 hover:bg-stone-50"
                    }`}
                >
                  {method === "card"
                    ? "Card"
                    : method === "transfer"
                      ? "Transfer"
                      : "Cash"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
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
            onClick={handleSubmit}
            className="mt-6 w-full bg-stone-800 hover:bg-stone-700 text-white text-sm py-3 rounded-full transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
}
