import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';

export default function Welcome({
    canRegister = false,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head>
                <title>Bubur Ayam Kang LW</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>

            <div className="relative min-h-screen overflow-hidden bg-stone-950 font-[instrument-sans]">

                {/* Background grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                    }}
                />

                {/* Glow blobs */}
                <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[120px]" />
                <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-500/8 blur-[120px]" />

                {/* NAV */}
                <nav className="relative z-10 flex items-center justify-between px-6 py-5 lg:px-12">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-lg">
                            🍚
                        </div>
                        <span className="text-sm font-bold text-white">Bubur Ayam Kang LW</span>
                    </div>

                    <div className="flex items-center gap-3">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded-xl bg-amber-400 px-5 py-2 text-sm font-bold text-stone-900 transition hover:bg-amber-300"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="bg-amber-400 rounded-xl px-5 py-2 text-sm font-semibold text-stone-900 transition hover:bg-amber-300"
                                >
                                    Masuk
                                </Link>
                                {/* {canRegister && (
                                    <Link
                                        href={register()}
                                        className="rounded-xl bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                                    >
                                        Daftar
                                    </Link>
                                )} */}
                            </>
                        )}
                    </div>
                </nav>

                {/* HERO */}
                <main className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-16 lg:pt-24 lg:px-12">

                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        Buka setiap hari · Pukul 06.30 – 10.00
                    </div>

                    {/* Headline */}
                    <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white lg:text-7xl">
                        Bubur Ayam{' '}
                        <span className="text-amber-400">Kang LW</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-400 lg:text-lg">
                        Bubur ayam lezat dengan cita rasa otentik yang sudah dipercaya ribuan pelanggan. Hangat, gurih, dan bikin nagih.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="group inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-3.5 text-base font-black text-stone-900 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:shadow-amber-400/30 active:scale-95"
                            >
                                Buka Dashboard
                                <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                        ) : (
                            <Link
                                href={login()}
                                className="group inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-3.5 text-base font-black text-stone-900 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 active:scale-95"
                            >
                                Masuk ke Sistem
                                <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                        )}

                        <div className="flex items-center gap-2 text-sm text-stone-500">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-base">⭐</span>
                            <span><strong className="text-white">4.9</strong> · Ribuan pelanggan puas</span>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="mt-16 grid grid-cols-3 gap-4 lg:gap-6">
                        {[
                            { emoji: '🍚', value: 'Sejak 2024', label: 'Tahun Berdiri' },
                            { emoji: '😋', value: '100+', label: 'Porsi per Hari' },
                            { emoji: '📍', value: '1', label: 'Jl. Sumpah Pemuda No.7, Lorok Pakjo, Depan Hotel Majestic Kota Palembang' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-3xl border border-stone-800 bg-stone-900/60 p-5 backdrop-blur-sm"
                            >
                                <div className="mb-2 text-2xl">{stat.emoji}</div>
                                <div className="text-2xl font-black text-white lg:text-3xl">{stat.value}</div>
                                <div className="mt-0.5 text-xs font-medium text-stone-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Menu preview cards */}
                    <div className="mt-12">
                        <p className="mb-5 text-xs font-bold uppercase tracking-widest text-stone-500">
                            Menu Favorit
                        </p>

                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            {[
                                { name: 'Bubur Ayam Original', desc: 'Klasik & gurih', emoji: '🍚', badge: null },
                                { name: 'Bubur Ayam Spesial', desc: 'Topping ayam suwir, kuah kuning dan telur', emoji: '🍲', badge: 'Terlaris' },
                                { name: 'Nasi Kuning Gamalama', desc: 'Topping ikan cakalang suwir, ayam suwir, bihun dan telur', emoji: '🍚', badge: 'Baru' },
                            ].map((menu) => (
                                <div
                                    key={menu.name}
                                    className="group relative overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-stone-800/80"
                                >
                                    {menu.badge && (
                                        <span className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-black ${menu.badge === 'Terlaris'
                                            ? 'bg-amber-400 text-stone-900'
                                            : 'bg-emerald-500 text-white'
                                            }`}>
                                            {menu.badge}
                                        </span>
                                    )}
                                    <div className="mb-3 text-3xl">{menu.emoji}</div>
                                    <h3 className="text-sm font-bold leading-snug text-white">{menu.name}</h3>
                                    <p className="mt-1 text-xs text-stone-500">{menu.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="mt-16 flex items-center justify-between border-t border-stone-800 pt-8">
                        <p className="text-xs text-stone-600">
                            © 2026 Bubur Ayam Kang LW · Palembang
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Sistem POS Aktif
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
