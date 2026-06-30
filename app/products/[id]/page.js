"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${params.id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        if (params?.id) {
            fetchProduct();
        }
    }, [params?.id]);

    const addToCart = () => {
        if (!product) return;

        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingItem = existingCart.find((item) => item._id === product._id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        window.dispatchEvent(new Event("cart:updated"));
    };

    if (loading) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center text-xl font-semibold text-slate-600">
                Loading product...
            </main>
        );
    }

    if (!product) {
        return (
            <main className="px-6 py-16">
                <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
                    <h1 className="text-3xl font-bold text-slate-900">Product not found</h1>
                    <p className="mt-3 text-slate-500">The product you are looking for could not be found.</p>
                    <Link
                        href="/"
                        className="mt-6 inline-flex rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-400"
                    >
                        Back to shop
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-[400px] w-full rounded-2xl object-cover"
                    />
                </div>

                <section className="flex flex-col justify-center">
                    <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                        {product.category}
                    </span>
                    <h1 className="mt-4 text-4xl font-bold text-slate-900">{product.title}</h1>
                    <p className="mt-4 text-lg text-slate-600">{product.description}</p>

                    <div className="mt-6 flex items-center gap-4">
                        <span className="text-4xl font-bold text-slate-900">${product.price}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                            In stock
                        </span>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button
                            onClick={addToCart}
                            className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
                        >
                            Add to cart
                        </button>
                        <Link
                            href="/checkout"
                            className="rounded-2xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
                        >
                            View cart
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
