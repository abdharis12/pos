import {
    ShoppingBag,
    UtensilsCrossed,
} from 'lucide-react';

import { Product } from './types';

import { usePosStore } from './stores/usePosStore';
import MenuCard from '@/components/MenuCard';
import OrderSummary from '@/components/OrderSummary';

interface Props {
    products: Product[];
}

export default function PosPage({ products }: Props) {
    const orderType = usePosStore((state) => state.orderType);
    const setOrderType = usePosStore((state) => state.setOrderType);

    if (!orderType) {
        return (
            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-950 p-6">
                {/* Background decoration */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/5 blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-amber-400/5 blur-3xl" />
                    {/* Grid lines */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                            backgroundSize: '48px 48px',
                        }}
                    />
                </div>

                <div className="relative w-full max-w-lg">
                    {/* Logo / Brand */}
                    <div className="mb-12 text-center">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400">
                            <span className="text-2xl">🍚</span>
                        </div>
                        <h1 className="text-3xl font-black tracking-tight text-white">
                            Bubur Ayam Kang LW
                        </h1>
                        <p className="mt-2 text-sm font-medium tracking-widest text-stone-500 uppercase">
                            Pilih Tipe Pesanan
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => setOrderType('takeaway')}
                            className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 p-8 transition-all duration-300 hover:border-amber-400/50 hover:bg-stone-800"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/0 transition-all duration-300 group-hover:from-amber-400/5 group-hover:to-amber-400/0" />
                            <div className="relative flex flex-col items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-stone-800 transition-all duration-300 group-hover:bg-amber-400/20">
                                    <ShoppingBag className="h-7 w-7 text-amber-400" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Take Away</h2>
                                    <p className="mt-0.5 text-xs text-stone-500">Bawa pulang</p>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setOrderType('dining')}
                            className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 p-8 transition-all duration-300 hover:border-amber-400/50 hover:bg-stone-800"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/0 transition-all duration-300 group-hover:from-amber-400/5 group-hover:to-amber-400/0" />
                            <div className="relative flex flex-col items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-stone-800 transition-all duration-300 group-hover:bg-amber-400/20">
                                    <UtensilsCrossed className="h-7 w-7 text-amber-400" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Dine In</h2>
                                    <p className="mt-0.5 text-xs text-stone-500">Makan di tempat</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen flex-col overflow-hidden bg-stone-100 lg:flex-row">
            {/* LEFT — Menu */}
            <div className="flex-1 overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 z-10 border-b border-stone-200/80 bg-stone-100/90 px-4 py-4 backdrop-blur-md lg:px-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-black tracking-tight text-stone-900 lg:text-2xl">
                                Bubur Ayam Kang LW
                            </h1>
                            <div className="mt-0.5 flex items-center gap-1.5">
                                <span className={`cursor-pointer inline-block h-1.5 w-1.5 rounded-full ${orderType === 'takeaway' ? 'bg-amber-400' : 'bg-emerald-500'}`} />
                                <p className="text-xs font-medium text-stone-500">
                                    {orderType === 'takeaway' ? 'Take Away' : 'Dine In'}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setOrderType(null)}
                            className="cursor-pointer rounded-xl border border-stone-200 bg-white px-3.5 py-2 text-xs font-semibold text-stone-600 shadow-sm transition hover:border-stone-300 hover:shadow-md active:scale-95"
                        >
                            Ganti Tipe
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="p-4 lg:p-6">
                    <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
                        {products.map((product) => (
                            <MenuCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT — Order Summary */}
            <OrderSummary />
        </div>
    );
}
