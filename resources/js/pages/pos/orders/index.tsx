import { formatRupiah } from '@/lib/currency';

interface Props {
    orders: any;
}

export default function OrderHistoryPage({
    orders,
}: Props) {
    return (
        <div className="min-h-screen bg-zinc-100 p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">
                    Riwayat Transaksi
                </h1>

                <p className="text-zinc-500">
                    Daftar transaksi POS
                </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <table className="w-full">
                    <thead className="bg-zinc-100">
                        <tr>
                            <th className="px-6 py-4 text-left">
                                Invoice
                            </th>

                            <th className="px-6 py-4 text-left">
                                Pelanggan
                            </th>

                            <th className="px-6 py-4 text-left">
                                Metode
                            </th>

                            <th className="px-6 py-4 text-left">
                                Total
                            </th>

                            <th className="px-6 py-4 text-left">
                                Tanggal
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.data.map(
                            (order: any) => (
                                <tr
                                    key={
                                        order.id
                                    }
                                    className="border-t"
                                >
                                    <td className="px-6 py-4 font-semibold">
                                        {
                                            order.invoice_number
                                        }
                                    </td>

                                    <td className="px-6 py-4">
                                        {order.customer_name ??
                                            '-'}
                                    </td>

                                    <td className="px-6 py-4 uppercase">
                                        {
                                            order.payment_method
                                        }
                                    </td>

                                    <td className="px-6 py-4 font-bold">
                                        {formatRupiah(
                                            order.total,
                                        )}
                                    </td>

                                    <td className="px-6 py-4 text-zinc-500">
                                        {new Date(
                                            order.created_at,
                                        ).toLocaleString(
                                            'id-ID',
                                        )}
                                    </td>
                                </tr>
                            ),
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
