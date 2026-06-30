"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState([]);
    const [isOrdered, setIsOrdered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "", type: "success" });
    const [formData, setFormData] = useState({
        customerName: "",
        phoneNumber: "",
        address: "",
        instructions: ""
    });

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

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = cartItems.length > 0 ? 45 : 0;
    const total = subtotal + delivery;
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        if (!toast.show) return;

        const timer = window.setTimeout(() => {
            setToast((prev) => ({ ...prev, show: false }));
        }, 2400);

        return () => window.clearTimeout(timer);
    }, [toast.show]);

    const showToast = (message, type = "success") => {
        setToast({ show: true, message, type });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = async () => {
        if (cartItems.length === 0) {
            showToast("Your cart is empty.", "error");
            return;
        }

        if (!formData.customerName.trim() || !formData.phoneNumber.trim() || !formData.address.trim()) {
            showToast("Please fill in your name, phone number, and delivery address.", "error");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    customerName: formData.customerName.trim(),
                    phoneNumber: formData.phoneNumber.trim(),
                    address: formData.address.trim(),
                    instructions: formData.instructions.trim(),
                    items: cartItems.map((item) => ({
                        title: item.title,
                        price: item.price,
                        quantity: item.quantity,
                        image: item.image
                    })),
                    subtotal,
                    delivery,
                    total
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to place order.");
            }

            localStorage.setItem("cart", "[]");
            setCartItems([]);
            setFormData({
                customerName: "",
                phoneNumber: "",
                address: "",
                instructions: ""
            });
            setIsOrdered(true);
            window.dispatchEvent(new Event("cart:updated"));
            showToast("Thank you for your order!", "success");

            window.setTimeout(() => {
                router.push("/");
            }, 1800);
        } catch (error) {
            console.error("Order placement failed:", error);
            showToast(error.message || "Something went wrong while placing your order.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
            {toast.show && (
                <div
                    className={`fixed right-4 top-4 z-50 rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-lg ${toast.type === "error" ? "bg-red-500" : "bg-emerald-500"
                        }`}
                >
                    {toast.message}
                </div>
            )}

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                                Checkout
                            </p>
                            <h1 className="text-3xl font-bold text-slate-900">Review your order</h1>
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
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
                                <p className="text-slate-500">Your cart is empty.</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                        <h2 className="text-lg font-semibold text-slate-900">Delivery details</h2>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <label className="block text-sm font-medium text-slate-700">
                                Full name
                                <input
                                    name="customerName"
                                    value={formData.customerName}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                                    placeholder="Aarav Sharma"
                                />
                            </label>
                            <label className="block text-sm font-medium text-slate-700">
                                Phone number
                                <input
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                                    placeholder="9876543210"
                                />
                            </label>
                            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                                Society / Block
                                <input
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                                    placeholder="Apex Heights, Sector 15"
                                />
                            </label>
                            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                                Delivery instructions
                                <textarea
                                    name="instructions"
                                    value={formData.instructions}
                                    onChange={handleChange}
                                    className="mt-2 min-h-24 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                                    placeholder="Leave at reception or ring bell"
                                />
                            </label>
                        </div>
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

                    <div className="mt-8 rounded-2xl bg-white/10 p-4">
                        <p className="text-sm font-semibold">Payment method</p>
                        <div className="mt-3 rounded-xl bg-white px-4 py-3 text-slate-900">
                            UPI / Card / Cash on delivery
                        </div>
                    </div>

                    <button
                        onClick={handlePlaceOrder}
                        disabled={isSubmitting || isOrdered}
                        className="mt-8 w-full rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-300"
                    >
                        {isSubmitting ? "Placing order..." : isOrdered ? "Order placed" : "Place order"}
                    </button>
                </aside>
            </div>
        </main>
    );
}
