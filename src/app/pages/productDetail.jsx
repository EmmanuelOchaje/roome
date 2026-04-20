import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import products from "../data/products";
import cart from "../../assets/bag.png";
import arrowLeft from "../../assets/left-chevron.png";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-stone-400">
        Product not found.
      </div>
    );

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition mb-8"
      >
        <img src={arrowLeft} alt="" className="w-5 h-5" />
        Back
      </button>

      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-stone-50 rounded-2xl overflow-hidden h-96 md:h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-screen h-screen object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl font-semibold text-stone-800 mb-3">
            {product.name}
          </h1>
          <p className="text-2xl font-medium text-stone-700 mb-6">
            ${product.price}
          </p>
          <p className="text-sm text-stone-500 leading-relaxed mb-8">
            {product.description}
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex items-center justify-center gap-3 bg-stone-800 hover:bg-stone-700 text-white px-6 py-3.5 rounded-full text-sm font-medium transition w-full md:w-fit"
          >
            <img src={cart} alt="" className="w-6 h-6" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`)}
                className="cursor-pointer group bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-md transition"
              >
                <div className="h-44 bg-stone-50 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-stone-800 line-clamp-1">
                    {p.name}
                  </p>
                  <p className="text-sm text-stone-500 mt-1">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
