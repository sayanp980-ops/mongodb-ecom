"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
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
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-6">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              href={`/products/${product._id}`}
              key={product._id}
              className="border rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-200 p-4 cursor-pointer"
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