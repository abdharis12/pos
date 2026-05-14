import { Head } from '@inertiajs/react';
import { CreditCard, ShoppingCart, Wallet, Flame, Package } from 'lucide-react';

import { dashboard } from '@/routes';
import { formatRupiah } from '@/lib/currency';

interface TopProduct {
    id: number;
    name: string;
    order_items_sum_qty: number;
}

interface TodayProductSale {
    id: number;
    name: string;
    order_items_sum_qty: number;
    order_items_sum_subtotal: number;
}

interface Props {
    todaySales: number;
    todayTransactions: number;
    monthlySales: number;
    cashSales: number;
    qrisSales: number;
    topProducts: TopProduct[];
    topProductsToday: TopProduct[];
    todayProductSales: TodayProductSale[];
    totalQtyToday: number;
}

export default function Dashboard({
    todaySales,
    todayTransactions,
    monthlySales,
    cashSales,
    qrisSales,
    topProducts,
    topProductsToday,
    todayProductSales,
    totalQtyToday,
}: Props) {

    return (
        <>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col gap-6 bg-stone-50 p-4 lg:p-6">
                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                            Bubur Ayam Kang LW
                        </p>
                        <h1 className="mt-0.5 text-2xl font-black tracking-tight text-stone-900 lg:text-3xl">
                            Dashboard
                        </h1>
                    </div>

                    <div className="rounded-2xl bg-amber-400 px-4 py-2 text-xs font-bold text-stone-900">
                        {new Date().toLocaleDateString('id-ID', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                        })}
                    </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
                    {/* TODAY SALES — hero */}
                    <div className="col-span-2 rounded-3xl bg-stone-900 p-5 lg:col-span-2 lg:p-6">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400">
                            <Wallet className="h-5 w-5 text-stone-900" />
                        </div>
                        <p className="text-xs font-semibold text-stone-400">Penjualan Hari Ini</p>
                        <h2 className="mt-2 text-2xl font-black tracking-tight text-white lg:text-3xl">
                            {formatRupiah(todaySales)}
                        </h2>
                    </div>

                    {/* TRANSACTIONS */}
                    <div className="rounded-3xl bg-white p-5 ring-1 ring-stone-200">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100">
                            <ShoppingCart className="h-5 w-5 text-stone-600" />
                        </div>
                        <p className="text-xs font-semibold text-stone-400">Transaksi</p>
                        <h2 className="mt-2 text-2xl font-black tracking-tight text-stone-900">
                            {todayTransactions}
                        </h2>
                    </div>

                    {/* MONTHLY */}
                    <div className="rounded-3xl bg-white p-5 ring-1 ring-stone-200">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100">
                            <CreditCard className="h-5 w-5 text-stone-600" />
                        </div>
                        <p className="text-xs font-semibold text-stone-400">Bulan Ini</p>
                        <h2 className="mt-2 text-xl font-black tracking-tight text-stone-900">
                            {formatRupiah(monthlySales)}
                        </h2>
                    </div>

                    {/* PAYMENT SPLIT */}
                    <div className="col-span-2 rounded-3xl bg-white p-5 ring-1 ring-stone-200 lg:col-span-1">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-400">
                            Pembayaran
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    <span className="text-xs font-semibold text-stone-500">Cash</span>
                                </div>
                                <span className="text-sm font-bold text-stone-900">{formatRupiah(cashSales)}</span>
                            </div>
                            <div className="h-px bg-stone-100" />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                                    <span className="text-xs font-semibold text-stone-500">QRIS</span>
                                </div>
                                <span className="text-sm font-bold text-stone-900">{formatRupiah(qrisSales)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TODAY PRODUCT SALES BREAKDOWN */}
                <div className="rounded-3xl bg-white p-5 ring-1 ring-stone-200 lg:p-6">
                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100">
                                <Package className="h-4 w-4 text-stone-600" />
                            </div>
                            <div>
                                <h2 className="text-base font-black tracking-tight text-stone-900">
                                    Rincian Produk Terjual
                                </h2>
                                <p className="text-xs text-stone-400">Semua produk yang terjual hari ini</p>
                            </div>
                        </div>
                        {totalQtyToday > 0 && (
                            <div className="rounded-2xl bg-amber-400 px-3 py-1.5 text-xs font-black text-stone-900">
                                {totalQtyToday} porsi total
                            </div>
                        )}
                    </div>

                    {todayProductSales.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-stone-200 py-10 text-center text-sm text-stone-400">
                            Belum ada produk terjual hari ini
                        </div>
                    ) : (
                        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-100">
                            {/* Table header */}
                            <div className="grid grid-cols-12 gap-3 bg-stone-50 px-4 py-2.5">
                                <span className="col-span-1 text-xs font-semibold uppercase tracking-wider text-stone-400">#</span>
                                <span className="col-span-5 text-xs font-semibold uppercase tracking-wider text-stone-400">Produk</span>
                                <span className="col-span-3 text-center text-xs font-semibold uppercase tracking-wider text-stone-400">Qty</span>
                                <span className="col-span-3 text-right text-xs font-semibold uppercase tracking-wider text-stone-400">Total</span>
                            </div>

                            {/* Table rows */}
                            <div className="divide-y divide-stone-100">
                                {todayProductSales.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="grid grid-cols-12 items-center gap-3 px-4 py-3 transition-colors hover:bg-stone-50"
                                    >
                                        <span className="col-span-1 text-xs font-bold tabular-nums text-stone-300">
                                            {index + 1}
                                        </span>
                                        <span className="col-span-5 truncate text-sm font-semibold text-stone-800">
                                            {product.name}
                                        </span>
                                        <div className="col-span-3 flex justify-center">
                                            <span className="rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700">
                                                {product.order_items_sum_qty ?? 0} porsi
                                            </span>
                                        </div>
                                        <span className="col-span-3 text-right text-sm font-bold text-stone-900">
                                            {formatRupiah(product.order_items_sum_subtotal ?? 0)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer total */}
                            <div className="grid grid-cols-12 items-center gap-3 border-t border-stone-200 bg-stone-900 px-4 py-3">
                                <span className="col-span-6 text-xs font-black uppercase tracking-wider text-stone-400">
                                    Total
                                </span>
                                <div className="col-span-3 flex justify-center">
                                    <span className="rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-black text-stone-900">
                                        {totalQtyToday} porsi
                                    </span>
                                </div>
                                <span className="col-span-3 text-right text-sm font-black text-white">
                                    {formatRupiah(todaySales)}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* BOTTOM GRID: Today's top + All-time top */}
                <div className="grid gap-4 lg:grid-cols-2">
                    {/* TOP PRODUCTS TODAY */}
                    <div className="rounded-3xl bg-stone-900 p-5 lg:p-6">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400">
                                <Flame className="h-4 w-4 text-stone-900" />
                            </div>
                            <div>
                                <h2 className="text-base font-black tracking-tight text-white">
                                    Terlaris Hari Ini
                                </h2>
                                <p className="text-xs text-stone-400">Menu paling laris sekarang</p>
                            </div>
                        </div>

                        {topProductsToday.length === 0 ? (
                            <div className="rounded-2xl border border-dashed border-stone-700 py-8 text-center text-sm text-stone-500">
                                Belum ada transaksi hari ini
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {topProductsToday.map((product, index) => {
                                    const maxQty = topProductsToday[0]?.order_items_sum_qty ?? 1;
                                    const pct = Math.round(((product.order_items_sum_qty ?? 0) / maxQty) * 100);
                                    const isTop = index === 0;

                                    return (
                                        <div
                                            key={product.id}
                                            className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${isTop ? 'bg-amber-400' : 'bg-stone-800'}`}
                                        >
                                            <span className={`w-5 text-xs font-black tabular-nums ${isTop ? 'text-stone-900' : 'text-stone-500'}`}>
                                                {index + 1}
                                            </span>

                                            <div className="flex-1 min-w-0">
                                                <p className={`truncate text-sm font-bold ${isTop ? 'text-stone-900' : 'text-white'}`}>
                                                    {product.name}
                                                </p>
                                                <div className={`mt-1.5 h-1.5 w-full overflow-hidden rounded-full ${isTop ? 'bg-amber-300' : 'bg-stone-700'}`}>
                                                    <div
                                                        className={`h-full rounded-full ${isTop ? 'bg-stone-900' : 'bg-amber-400'}`}
                                                        style={{ width: `${pct}%` }}
                                                    />
                                                </div>
                                            </div>

                                            <div className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-black ${isTop ? 'bg-stone-900 text-amber-400' : 'bg-stone-700 text-white'}`}>
                                                {product.order_items_sum_qty ?? 0} terjual
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* TOP PRODUCTS ALL TIME */}
                    <div className="rounded-3xl bg-white p-5 ring-1 ring-stone-200 lg:p-6">
                        <div className="mb-5">
                            <h2 className="text-base font-black tracking-tight text-stone-900">
                                Produk Terlaris
                            </h2>
                            <p className="text-xs text-stone-400">Sepanjang waktu</p>
                        </div>

                        <div className="space-y-2">
                            {topProducts.map((product, index) => {
                                const maxQty = topProducts[0]?.order_items_sum_qty ?? 1;
                                const pct = Math.round(((product.order_items_sum_qty ?? 0) / maxQty) * 100);

                                return (
                                    <div
                                        key={product.id}
                                        className="flex items-center gap-3 rounded-2xl bg-stone-50 px-4 py-3"
                                    >
                                        <span className="w-5 text-xs font-black tabular-nums text-stone-300">
                                            {index + 1}
                                        </span>

                                        <div className="flex-1 min-w-0">
                                            <p className="truncate text-sm font-bold text-stone-900">
                                                {product.name}
                                            </p>
                                            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
                                                <div
                                                    className="h-full rounded-full bg-amber-400"
                                                    style={{ width: `${pct}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div className="shrink-0 rounded-xl bg-stone-900 px-3 py-1.5 text-xs font-black text-white">
                                            {product.order_items_sum_qty ?? 0} terjual
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
