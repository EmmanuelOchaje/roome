import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import cart from "../../assets/bag.png";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden bg-stone-50 h-56">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-stone-800 hover:text-stone-500 transition line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-stone-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-base font-semibold text-stone-800">
            ${product.price}
          </span>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white text-xs px-3 py-2 rounded-full transition"
          >
            Add
            <img src={cart} alt="" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
