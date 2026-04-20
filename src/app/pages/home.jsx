import { useState } from "react";
import products from "../data/products";
import ProductCard from "../../app/components/productCard";

const categories = ["All", "Chairs", "Lighting"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = products.filter((p) => {
    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-stone-800">
          Curated for your space.
        </h1>
        <p className="text-stone-400 mt-2 text-sm">
          Premium interior pieces, thoughtfully selected.
        </p>
      </div>

      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition
                ${
                  activeCategory === cat
                    ? "bg-stone-800 text-white"
                    : "border border-stone-200 text-stone-500 hover:bg-stone-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-stone-200 rounded-full px-4 py-1.5 text-sm outline-none w-full sm:w-56 text-stone-700 placeholder:text-stone-400"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className="text-stone-400 text-sm col-span-full">
            No products found.
          </p>
        )}
      </div>
    </main>
  );
}
