"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 🔍 Filter logic
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-10 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-10 text-white text-center shadow-xl">
        <h1 className="text-5xl font-bold mb-4">
          SWARNAHATI Smart Market
        </h1>

        <p className="text-lg mb-6">
          Shop the best products at amazing prices.
        </p>

        <Link
          href="#products"
          className="bg-white text-emerald-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100"
        >
          Shop Now
        </Link>
      </div>
      
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
  <div
  onClick={() => setCategory("All")}
  className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer"
>
  <div className="text-5xl">🛍️</div>
  <h3 className="font-bold mt-3">All Products</h3>
</div>
        <div
          onClick={() => setCategory("Footwear")}
          className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer"
        >
          <div className="text-5xl">👟</div>
          <h3 className="font-bold mt-3">Shoes</h3>
        </div>

        <div
          onClick={() => setCategory("Apparel")}
          className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer"
        >
          <div className="text-5xl">👕</div>
          <h3 className="font-bold mt-3">Clothing</h3>
        </div>

        <div
          onClick={() => setCategory("Electronics")}
          className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer"
        >
          <div className="text-5xl">💻</div>
          <h3 className="font-bold mt-3">Electronics</h3>
        </div>

        <div
          onClick={() => setCategory("Home")}
          className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer"
        >
          <div className="text-5xl">🏠</div>
          <h3 className="font-bold mt-3">Home</h3>
        </div>

      </div>
      <h1 className="text-3xl font-bold text-center mb-6">
        All Products
      </h1>

      {/* 🔍 SEARCH BAR */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* PRODUCTS GRID */}
      <div
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              href={`/products/${product._id}`}
              key={product._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-4 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h2 className="text-lg font-semibold mt-3">
                {product.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-green-600">
                  ${product.price}
                </span>

                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found 😢
          </p>
        )}
      </div>
    </div>
  );
}