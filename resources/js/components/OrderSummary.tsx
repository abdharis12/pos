import { router } from '@inertiajs/react';

import toast from 'react-hot-toast';

import { formatRupiah } from '@/lib/currency';

import { usePosStore } from '@/pages/pos/stores/usePosStore';
import { formatNumber, parseNumber } from '@/lib/number';

export default function OrderSummary() {
    const cart = usePosStore(
        (state) => state.cart,
    );

    const total = usePosStore(
        (state) => state.total(),
    );

    const customerName = usePosStore(
        (state) => state.customerName,
    );

    const setCustomerName = usePosStore(
        (state) => state.setCustomerName,
    );

    const paymentMethod = usePosStore(
        (state) => state.paymentMethod,
    );

    const setPaymentMethod = usePosStore(
        (state) =>
            state.setPaymentMethod,
    );

    const paidAmount = usePosStore(
        (state) => state.paidAmount,
    );

    const setPaidAmount = usePosStore(
        (state) => state.setPaidAmount,
    );

    const changeAmount = usePosStore(
        (state) =>
            state.changeAmount(),
    );

    const clearCart = usePosStore(
        (state) => state.clearCart,
    );

    const orderType = usePosStore(
        (state) => state.orderType,
    );

    const handleCheckout = () => {
        router.post(
            '/pos/checkout',
            {
                customer_name:
                    customerName,

                order_type: orderType,

                payment_method:
                    paymentMethod,

                paid_amount:
                    Number(
                        paidAmount || 0,
                    ),

                items: cart.map(
                    (item) => ({
                        product_id:
                            item.product
                                .id,

                        qty: item.qty,
                    }),
                ),
            },
            {
                preserveScroll: true,

                onSuccess: () => {
                    toast.success(
                        'Transaksi berhasil',
                    );

                    clearCart();
                },

                onError: (
                    errors,
                ) => {
                    console.error(
                        errors,
                    );

                    const firstError =
                        Object.values(
                            errors,
                        )[0];

                    toast.error(
                        String(
                            firstError,
                        ),
                    );
                },
            },
        );
    };

    const canCheckout = () => {
        if (cart.length === 0) {
            return false;
        }

        if (!paymentMethod) {
            return false;
        }

        if (
            paymentMethod ===
            'cash' &&
            Number(paidAmount || 0) < total
        ) {
            return false;
        }

        return true;
    };

    return (
        <div className="h-[45vh] w-full overflow-y-auto border-t bg-white p-4 lg:h-full lg:w-[400px] lg:border-l lg:border-t-0 lg:p-6">
            <h2 className="mb-6 text-2xl font-bold">
                Order Summary
            </h2>

            {/* CUSTOMER */}
            <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">
                    Nama Pelanggan
                </label>

                <input
                    type="text"
                    value={customerName}
                    onChange={(e) =>
                        setCustomerName(
                            e.target.value,
                        )
                    }
                    placeholder="Optional"
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            {/* ITEMS */}
            <div className="flex-1 space-y-3 overflow-y-auto">
                {cart.length === 0 && (
                    <div className="rounded-2xl bg-zinc-100 p-6 text-center text-zinc-500">
                        Belum ada item
                    </div>
                )}

                {cart.map((item) => (
                    <div
                        key={
                            item.product.id
                        }
                        className="flex items-center justify-between rounded-2xl bg-zinc-100 p-4"
                    >
                        <div>
                            <h3 className="font-semibold">
                                {
                                    item.product
                                        .name
                                }
                            </h3>

                            <p className="text-sm text-zinc-500">
                                {item.qty} x{' '}
                                {formatRupiah(
                                    item
                                        .product
                                        .price,
                                )}
                            </p>
                        </div>

                        <div className="font-bold">
                            {formatRupiah(
                                item.subtotal,
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* TOTAL */}
            <div className="mt-6 rounded-3xl bg-zinc-100 p-5">
                <div className="flex items-center justify-between">
                    <span className="text-zinc-500">
                        Total
                    </span>

                    <span className="text-3xl font-bold">
                        {formatRupiah(
                            total,
                        )}
                    </span>
                </div>
            </div>

            {/* PAYMENT */}
            <div className="mt-6">
                <label className="mb-3 block text-sm font-medium">
                    Metode Pembayaran
                </label>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() =>
                            setPaymentMethod(
                                'cash',
                            )
                        }
                        className={`rounded-2xl border p-4 font-semibold transition ${paymentMethod ===
                            'cash'
                            ? 'border-green-600 bg-green-50 text-green-700'
                            : 'border-zinc-200'
                            }`}
                    >
                        Cash
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            setPaymentMethod(
                                'qris',
                            )
                        }
                        className={`rounded-2xl border p-4 font-semibold transition ${paymentMethod ===
                            'qris'
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-zinc-200'
                            }`}
                    >
                        QRIS
                    </button>
                </div>
            </div>

            {/* CASH */}
            {paymentMethod ===
                'cash' && (
                    <div className="mt-6">
                        <label className="mb-2 block text-sm font-medium">
                            Uang Dibayarkan
                        </label>

                        <input
                            type="text"
                            inputMode="numeric"
                            value={formatNumber(
                                paidAmount,
                            )}
                            onChange={(e) => {
                                const raw =
                                    e.target.value;

                                if (raw === '') {
                                    setPaidAmount('');

                                    return;
                                }

                                const parsed =
                                    parseNumber(raw);

                                if (isNaN(parsed)) {
                                    return;
                                }

                                setPaidAmount(parsed);
                            }}
                            placeholder="0"
                            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <div className="mt-4 rounded-2xl bg-blue-50 p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-blue-700">
                                    Kembalian
                                </span>

                                <span className="text-xl font-bold text-blue-700">
                                    {formatRupiah(
                                        changeAmount,
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

            {/* QRIS */}
            {paymentMethod ===
                'qris' && (
                    <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-center">
                        <p className="font-semibold text-blue-700">
                            Scan QRIS
                        </p>

                        <p className="mt-1 text-sm text-blue-500">
                            Pembayaran digital
                        </p>
                    </div>
                )}

            {/* BUTTON */}
            <button
                type="button"
                disabled={
                    !canCheckout()
                }
                onClick={
                    handleCheckout
                }
                className="mt-6 rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:bg-zinc-300"
            >
                Proses Bayar
            </button>
        </div>
    );
}
