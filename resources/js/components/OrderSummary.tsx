import { router } from '@inertiajs/react';

import toast from 'react-hot-toast';

import { formatRupiah } from '@/lib/currency';

import { usePosStore } from '@/pages/pos/stores/usePosStore';
import { formatNumber, parseNumber } from '@/lib/number';

const QUICK_AMOUNTS = [50_000, 100_000];

export default function OrderSummary() {
    const cart = usePosStore((state) => state.cart);
    const total = usePosStore((state) => state.total());
    const customerName = usePosStore((state) => state.customerName);
    const setCustomerName = usePosStore((state) => state.setCustomerName);
    const paymentMethod = usePosStore((state) => state.paymentMethod);
    const setPaymentMethod = usePosStore((state) => state.setPaymentMethod);
    const paidAmount = usePosStore((state) => state.paidAmount);
    const setPaidAmount = usePosStore((state) => state.setPaidAmount);
    const changeAmount = usePosStore((state) => state.changeAmount());
    const clearCart = usePosStore((state) => state.clearCart);
    const orderType = usePosStore((state) => state.orderType);

    const handleCheckout = () => {
        router.post(
            '/pos/checkout',
            {
                customer_name: customerName,
                order_type: orderType,
                payment_method: paymentMethod,
                paid_amount: Number(paidAmount || 0),
                items: cart.map((item) => ({
                    product_id: item.product.id,
                    qty: item.qty,
                })),
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success('Transaksi berhasil');
                    clearCart();
                },
                onError: (errors) => {
                    console.error(errors);
                    const firstError = Object.values(errors)[0];
                    toast.error(String(firstError));
                },
            },
        );
    };

    const canCheckout = () => {
        if (cart.length === 0) return false;
        if (!paymentMethod) return false;
        if (paymentMethod === 'cash' && Number(paidAmount || 0) < total) return false;
        return true;
    };

    const PaidAmountInput = () => (
        <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-stone-400">
                Uang Dibayarkan
            </label>

            {/* Quick amount buttons */}
            <div className="mb-2 grid grid-cols-2 gap-2">
                {QUICK_AMOUNTS.map((amount) => (
                    <button
                        key={amount}
                        type="button"
                        onClick={() => setPaidAmount(amount)}
                        className={`rounded-xl border py-2 text-sm font-bold transition-all duration-200 active:scale-95 ${Number(paidAmount) === amount
                            ? 'border-amber-400 bg-amber-400 text-stone-900'
                            : 'border-stone-700 bg-stone-800 text-stone-300 hover:border-stone-500 hover:text-white'
                            }`}
                    >
                        {formatRupiah(amount)}
                    </button>
                ))}
            </div>

            {/* Manual input */}
            <input
                type="text"
                inputMode="numeric"
                value={formatNumber(paidAmount)}
                onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === '') { setPaidAmount(''); return; }
                    const parsed = parseNumber(raw);
                    if (isNaN(parsed)) return;
                    setPaidAmount(parsed);
                }}
                placeholder="Atau ketik nominal lain..."
                className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-sm text-white placeholder-stone-500 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30"
            />

            <div className="mt-2 flex items-center justify-between rounded-xl bg-stone-800 px-4 py-3">
                <span className="text-sm text-stone-400">Kembalian</span>
                <span className="text-base font-bold text-emerald-400">
                    {formatRupiah(changeAmount)}
                </span>
            </div>
        </div>
    );

    return (
        <div className="flex h-[50vh] w-full flex-col overflow-hidden border-t border-stone-200 bg-stone-900 lg:h-full lg:w-[380px] lg:border-l lg:border-t-0">
            {/* Header */}
            <div className="shrink-0 border-b border-stone-700/60 px-5 py-4">
                <h2 className="text-lg font-bold tracking-tight text-white">Pesanan</h2>
                <p className="text-xs text-stone-400">{cart.length} item dipilih</p>
            </div>

            <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-4 scrollbar-none">
                {/* Customer */}
                <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-stone-400">
                        Nama Pelanggan
                    </label>
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Optional"
                        className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-sm text-white placeholder-stone-500 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30"
                    />
                </div>

                {/* Items */}
                <div className="space-y-2">
                    {cart.length === 0 && (
                        <div className="rounded-xl border border-dashed border-stone-700 py-8 text-center text-sm text-stone-500">
                            Belum ada item dipilih
                        </div>
                    )}

                    {cart.map((item) => (
                        <div
                            key={item.product.id}
                            className="flex items-center justify-between rounded-xl bg-stone-800 px-4 py-3"
                        >
                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-sm font-semibold text-white">
                                    {item.product.name}
                                </h3>
                                <p className="text-xs text-stone-400">
                                    {item.qty} × {formatRupiah(item.product.price)}
                                </p>
                            </div>
                            <div className="ml-3 shrink-0 text-sm font-bold text-amber-400">
                                {formatRupiah(item.subtotal)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total */}
                <div className="rounded-xl bg-amber-400 px-5 py-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-stone-800">Total</span>
                        <span className="text-2xl font-black tracking-tight text-stone-900">
                            {formatRupiah(total)}
                        </span>
                    </div>
                </div>

                {/* Payment Method */}
                <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-stone-400">
                        Metode Pembayaran
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('cash')}
                            className={`rounded-xl border py-3 text-sm font-bold transition-all duration-200 ${paymentMethod === 'cash'
                                ? 'border-amber-400 bg-amber-400 text-stone-900'
                                : 'border-stone-700 bg-stone-800 text-stone-400 hover:border-stone-500 hover:text-white'
                                }`}
                        >
                            💵 Cash
                        </button>
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('qris')}
                            className={`rounded-xl border py-3 text-sm font-bold transition-all duration-200 ${paymentMethod === 'qris'
                                ? 'border-amber-400 bg-amber-400 text-stone-900'
                                : 'border-stone-700 bg-stone-800 text-stone-400 hover:border-stone-500 hover:text-white'
                                }`}
                        >
                            📱 QRIS
                        </button>
                    </div>
                </div>

                {/* Cash */}
                {paymentMethod === 'cash' && <PaidAmountInput />}

                {/* QRIS */}
                {paymentMethod === 'qris' && (
                    <div className="space-y-3">
                        <div className="rounded-xl border border-stone-700 bg-stone-800 p-5 text-center">
                            <div className="mb-1 text-2xl">
                                <img
                                    src="/qris.jpeg"
                                    alt="QRIS Kang LW"
                                    className="mx-auto h-full object-cover"
                                />
                            </div>
                            <p className="text-sm font-semibold text-white">Scan QRIS</p>
                            <p className="mt-0.5 text-xs text-stone-400">Pembayaran digital</p>
                        </div>

                        <PaidAmountInput />
                    </div>
                )}
            </div>

            {/* Checkout Button */}
            <div className="shrink-0 border-t border-stone-700/60 p-4">
                <button
                    type="button"
                    disabled={!canCheckout()}
                    onClick={handleCheckout}
                    className="w-full rounded-xl bg-amber-400 py-4 text-base font-black tracking-tight text-stone-900 shadow-lg shadow-amber-900/20 transition-all duration-200 hover:bg-amber-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-stone-700 disabled:text-stone-500 disabled:shadow-none"
                >
                    Proses Bayar
                </button>
            </div>
        </div>
    );
}
