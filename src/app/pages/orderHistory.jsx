import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function OrderHistory() {
  const orders = useSelector((state) => state.orders.orders);

  if (orders.length === 0)
    return (
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-stone-400 text-sm mb-4">You have no orders yet.</p>
        <Link
          to="/"
          className="text-sm bg-stone-800 text-white px-6 py-2.5 rounded-full hover:bg-stone-700 transition"
        >
          Start Shopping
        </Link>
      </main>
    );

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-stone-800 mb-8">
        Order History
      </h1>

      <div className="flex flex-col gap-6">
        {orders
          .slice()
          .reverse()
          .map((order) => (
            <div
              key={order.id}
              className="border border-stone-100 rounded-2xl p-6 bg-white"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest">
                    Order
                  </p>
                  <p className="text-sm font-medium text-stone-700">
                    #{order.id}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-400">
                    {new Date(order.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <span className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full mt-1 inline-block">
                    Delivered
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover bg-stone-50"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-stone-800 line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-stone-400">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm text-stone-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 mt-4 pt-4 flex justify-between">
                <span className="text-sm text-stone-500">Total</span>
                <span className="text-sm font-semibold text-stone-800">
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
