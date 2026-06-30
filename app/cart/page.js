"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const loadCart = () => {
            const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
            setCartItems(storedCart);
        };

        loadCart();
        window.addEventListener("cart:updated", loadCart);

        return () => {
            window.removeEventListener("cart:updated", loadCart);
        };
    }, []);

    const updateQuantity = (id, quantity) => {
        const updatedCart = quantity <= 0
            ? cartItems.filter((item) => item._id !== id)
            : cartItems.map((item) => item._id === id ? { ...item, quantity } : item);

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        window.dispatchEvent(new Event("cart:updated"));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = cartItems.length > 0 ? 45 : 0;
    const total = subtotal + delivery;
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                                Cart
                            </p>
                            <h1 className="text-3xl font-bold text-slate-900">Your selected items</h1>
                        </div>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                            {itemCount} items
                        </span>
                    </div>

                    <div className="mt-8 space-y-4">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
                                    <img src={item.image} alt={item.title} className="h-16 w-16 rounded-2xl object-cover" />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-3">
                                            <h2 className="font-semibold text-slate-900">{item.title}</h2>
                                            <span className="font-semibold text-slate-900">${item.price * item.quantity}</span>
                                        </div>
                                        <p className="text-sm text-slate-500">{item.category}</p>
                                        <div className="mt-3 flex items-center gap-3">
                                            <button
                                                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                className="h-8 w-8 rounded-full border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600"
                                            >
                                                −
                                            </button>
                                            <span className="min-w-6 text-center font-semibold text-slate-900">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                                className="h-8 w-8 rounded-full border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
                                <p className="text-slate-500">Your cart is empty.</p>
                            </div>
                        )}
                    </div>
                </section>

                <aside className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
                    <h2 className="text-xl font-semibold">Order summary</h2>

                    <div className="mt-6 space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-300">Subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-slate-300">Delivery</span>
                            <span>${delivery}</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-700 pt-3 text-base font-semibold">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>

                    <Link
                        href="/checkout"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-slate-900 transition hover:bg-emerald-400"
                    >
                        Proceed to checkout
                    </Link>
                </aside>
            </div>
        </main>
    );
}
