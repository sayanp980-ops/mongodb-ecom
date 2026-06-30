"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/cart", label: "Cart" },
];

export default function Navbar() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
            setCartCount(count);
        };

        updateCartCount();
        window.addEventListener("cart:updated", updateCartCount);

        return () => {
            window.removeEventListener("cart:updated", updateCartCount);
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-lg font-bold text-white shadow-lg shadow-emerald-200">
                        N
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                            Noida
                        </p>
                        <span className="text-base font-bold text-slate-900">
                            Society Market
                        </span>
                    </div>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 transition hover:text-emerald-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href="/cart"
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                    Cart ({cartCount})
                </Link>
            </div>
        </nav>
    );
}
