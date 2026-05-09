import { Head } from '@inertiajs/react';

import {
    CreditCard,
    ShoppingCart,
    Wallet,
} from 'lucide-react';

import { dashboard } from '@/routes';

import { formatRupiah } from '@/lib/currency';

interface Props {
    todaySales: number;
    todayTransactions: number;
    monthlySales: number;
    cashSales: number;
    qrisSales: number;

    topProducts: {
        id: number;
        name: string;
        order_items_sum_qty: number;
    }[];
}

export default function Dashboard({
    todaySales,
    todayTransactions,
    monthlySales,
    cashSales,
    qrisSales,
    topProducts,
}: Props) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col gap-6 rounded-xl p-6">
                {/* HEADER */}
                <div>
                    <h1 className="text-3xl font-bold">
                        Dashboard POS
                    </h1>

                    <p className="text-zinc-500">
                        Bubur Ayam Kang LW
                    </p>
                </div>

                {/* STATS */}
                <div className="grid gap-6 md:grid-cols-5">
                    {/* TODAY SALES */}
                    <div className="rounded-3xl border bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="rounded-2xl bg-green-100 p-3">
                                <Wallet className="h-6 w-6 text-green-700" />
                            </div>
                        </div>

                        <p className="text-zinc-500">
                            Penjualan Hari Ini
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {formatRupiah(
                                todaySales,
                            )}
                        </h2>
                    </div>

                    {/* TRANSACTION */}
                    <div className="rounded-3xl border bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="rounded-2xl bg-blue-100 p-3">
                                <ShoppingCart className="h-6 w-6 text-blue-700" />
                            </div>
                        </div>

                        <p className="text-zinc-500">
                            Transaksi Hari Ini
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {
                                todayTransactions
                            }
                        </h2>
                    </div>

                    {/* MONTHLY */}
                    <div className="rounded-3xl border bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="rounded-2xl bg-orange-100 p-3">
                                <CreditCard className="h-6 w-6 text-orange-700" />
                            </div>
                        </div>

                        <p className="text-zinc-500">
                            Penjualan Bulan Ini
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {formatRupiah(
                                monthlySales,
                            )}
                        </h2>
                    </div>

                    {/* CASH SALES */}
                    <div className="rounded-3xl border bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="rounded-2xl bg-green-100 p-3">
                                <Wallet className="h-6 w-6 text-green-700" />
                            </div>
                        </div>

                        <p className="text-zinc-500">
                            Penjualan Cash
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {formatRupiah(
                                cashSales,
                            )}
                        </h2>
                    </div>

                    {/* QRIS SALES */}
                    <div className="rounded-3xl border bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="rounded-2xl bg-purple-100 p-3">
                                <CreditCard className="h-6 w-6 text-purple-700" />
                            </div>
                        </div>

                        <p className="text-zinc-500">
                            Penjualan QRIS
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {formatRupiah(
                                qrisSales,
                            )}
                        </h2>
                    </div>
                </div>

                {/* TOP PRODUCTS */}
                <div className="rounded-3xl border bg-white p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">
                            Produk Terlaris
                        </h2>

                        <p className="text-zinc-500">
                            Menu paling sering dibeli
                        </p>
                    </div>

                    <div className="space-y-4">
                        {topProducts.map(
                            (product) => (
                                <div
                                    key={
                                        product.id
                                    }
                                    className="flex items-center justify-between rounded-2xl bg-zinc-100 p-4"
                                >
                                    <div>
                                        <h3 className="font-semibold">
                                            {
                                                product.name
                                            }
                                        </h3>
                                    </div>

                                    <div className="rounded-xl bg-white px-4 py-2 font-bold shadow-sm">
                                        {product.order_items_sum_qty ??
                                            0}{' '}
                                        terjual
                                    </div>
                                </div>
                            ),
                        )}
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
