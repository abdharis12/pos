import { router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { formatRupiah } from '@/lib/currency';

interface PaginateLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Orders {
    data: any[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: PaginateLink[];
}

interface Props {
    orders: Orders;
}

export default function OrderHistoryPage({ orders }: Props) {
    const goToPage = (url: string | null) => {
        if (!url) return;
        router.visit(url, { preserveScroll: true });
    };

    // Hanya tampilkan nomor halaman (buang "Previous" & "Next" bawaan Laravel)
    const pageLinks = orders.links.slice(1, -1);

    return (
        <div className="min-h-screen bg-stone-50 p-4 lg:p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                        POS System
                    </p>
                    <h1 className="mt-0.5 text-2xl font-black tracking-tight text-stone-900 lg:text-3xl">
                        Riwayat Transaksi
                    </h1>
                </div>

                <span className="rounded-2xl bg-stone-100 px-4 py-2 text-xs font-bold text-stone-500">
                    {orders.total} transaksi
                </span>
            </div>

            {/* Table card */}
            <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-stone-200">
                {/* Table — md+ */}
                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-stone-100 bg-stone-50">
                                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-stone-400">Invoice</th>
                                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-stone-400">Pelanggan</th>
                                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-stone-400">Metode</th>
                                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-stone-400">Total</th>
                                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-stone-400">Tanggal</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-stone-100">
                            {orders.data.map((order: any) => (
                                <tr key={order.id} className="transition-colors hover:bg-stone-50/80">
                                    <td className="px-6 py-4">
                                        <span className="rounded-xl bg-stone-100 px-3 py-1.5 text-xs font-black text-stone-700">
                                            {order.invoice_number}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-stone-700">
                                        {order.customer_name ?? <span className="text-stone-300">—</span>}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className={`rounded-xl px-3 py-1.5 text-xs font-bold uppercase ${order.payment_method === 'cash'
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {order.payment_method}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-sm font-black text-stone-900">
                                        {formatRupiah(order.total)}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-stone-400">
                                        {new Date(order.created_at).toLocaleString('id-ID')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Card list — mobile */}
                <div className="divide-y divide-stone-100 md:hidden">
                    {orders.data.map((order: any) => (
                        <div key={order.id} className="p-4">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <span className="rounded-lg bg-stone-100 px-2.5 py-1 text-xs font-black text-stone-700">
                                        {order.invoice_number}
                                    </span>
                                    <p className="mt-2 text-sm font-medium text-stone-700">
                                        {order.customer_name ?? <span className="text-stone-300">Tanpa nama</span>}
                                    </p>
                                    <p className="mt-0.5 text-xs text-stone-400">
                                        {new Date(order.created_at).toLocaleString('id-ID')}
                                    </p>
                                </div>

                                <div className="shrink-0 text-right">
                                    <p className="text-base font-black text-stone-900">
                                        {formatRupiah(order.total)}
                                    </p>
                                    <span className={`mt-1 inline-block rounded-lg px-2.5 py-1 text-xs font-bold uppercase ${order.payment_method === 'cash'
                                            ? 'bg-emerald-100 text-emerald-700'
                                            : 'bg-blue-100 text-blue-700'
                                        }`}>
                                        {order.payment_method}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-stone-100 px-5 py-4">
                    {/* Info */}
                    <p className="text-xs text-stone-400">
                        <span className="font-bold text-stone-700">{orders.from}–{orders.to}</span> dari {orders.total}
                    </p>

                    {/* Controls */}
                    <div className="flex items-center gap-1.5">
                        {/* Prev */}
                        <button
                            onClick={() => goToPage(orders.links[0].url)}
                            disabled={!orders.links[0].url}
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-600 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        {/* Page numbers */}
                        <div className="flex items-center gap-1">
                            {pageLinks.map((link, i) => {
                                // Ellipsis
                                if (link.label === '...') {
                                    return (
                                        <span key={i} className="flex h-9 w-9 items-center justify-center text-xs text-stone-400">
                                            …
                                        </span>
                                    );
                                }

                                return (
                                    <button
                                        key={i}
                                        onClick={() => goToPage(link.url)}
                                        disabled={link.active}
                                        className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold transition ${link.active
                                                ? 'bg-stone-900 text-white'
                                                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Next */}
                        <button
                            onClick={() => goToPage(orders.links[orders.links.length - 1].url)}
                            disabled={!orders.links[orders.links.length - 1].url}
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-600 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
