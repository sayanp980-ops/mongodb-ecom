export default function AboutPage() {
    const highlights = [
        { value: "120+", label: "verified society members", note: "active every week" },
        { value: "4.9/5", label: "average rating", note: "from residents" },
        { value: "15 min", label: "average delivery", note: "across Noida" }
    ];

    const storyCards = [
        {
            title: "Fresh essentials",
            description:
                "From dairy and vegetables to pantry staples, families can shop from local vendors without leaving the gate.",
            image:
                "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Trusted helpers",
            description:
                "Book reliable tutors, cleaners, electricians, and home care specialists from people your society already knows.",
            image:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Community events",
            description:
                "Coordinate festive grocery lists, school supplies, and society celebrations with a shared, transparent platform.",
            image:
                "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80"
        }
    ];

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_25%)]">
            <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                        <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
                            About our community marketplace
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Bringing everyday convenience to the people who know your block best.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Noida Society Marketplace is a neighborhood-first platform designed to help residents discover fresh food, household needs, trusted services, and community deals in one secure digital space.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {highlights.map((item) => (
                                <div key={item.value} className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
                                    <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                                    <p className="text-sm text-slate-500">{item.label}</p>
                                    <p className="text-xs text-emerald-600">{item.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
                        <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
                            alt="Residents shopping together in a community space"
                            className="h-72 w-full object-cover"
                        />
                        <div className="bg-linear-to-br from-emerald-500 to-teal-600 p-6 text-white">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
                                Community promise
                            </p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                                    Verified local sellers and service providers
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                                    Transparent pricing with secure checkout options
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                                    Support for societies, apartment communities, and events
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="mb-8 max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                        Why residents love us
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-900">A marketplace built around trust, speed, and neighborhood care.</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {storyCards.map((card) => (
                        <article key={card.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
                            <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
