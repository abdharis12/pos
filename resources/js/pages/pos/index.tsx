import {
    ShoppingBag,
    UtensilsCrossed,
} from 'lucide-react';

import { Product } from './types';

import { usePosStore } from './stores/usePosStore';
import MenuCard from '@/components/menuCard';
import OrderSummary from '@/components/OrderSummary';

interface Props {
    products: Product[];
}

export default function PosPage({
    products,
}: Props) {
    const orderType =
        usePosStore(
            (state) => state.orderType,
        );

    const setOrderType =
        usePosStore(
            (state) =>
                state.setOrderType,
        );

    if (!orderType) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-100 p-6">
                <div className="w-full max-w-3xl">
                    <div className="mb-10 text-center">
                        <h1 className="text-4xl font-bold">
                            Bubur Ayam Kang LW
                        </h1>

                        <p className="mt-2 text-zinc-500">
                            Pilih tipe pesanan
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <button
                            onClick={() =>
                                setOrderType(
                                    'takeaway',
                                )
                            }
                            className="rounded-3xl bg-white p-10 shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
                        >
                            <div className="flex flex-col items-center">
                                <ShoppingBag className="mb-4 h-16 w-16 text-blue-600" />

                                <h2 className="text-2xl font-bold">
                                    Take Away
                                </h2>

                                <p className="mt-2 text-sm text-zinc-500">
                                    Bawa pulang
                                </p>
                            </div>
                        </button>

                        <button
                            onClick={() =>
                                setOrderType(
                                    'dining',
                                )
                            }
                            className="rounded-3xl bg-white p-10 shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
                        >
                            <div className="flex flex-col items-center">
                                <UtensilsCrossed className="mb-4 h-16 w-16 text-green-600" />

                                <h2 className="text-2xl font-bold">
                                    Dine In
                                </h2>

                                <p className="mt-2 text-sm text-zinc-500">
                                    Makan di tempat
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen flex-col overflow-hidden bg-zinc-100 lg:flex-row">
            {/* LEFT */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Bubur Ayam Kang LW
                        </h1>

                        <p className="text-zinc-500">
                            {orderType ===
                                'takeaway'
                                ? 'Take Away'
                                : 'Dine In'}
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            setOrderType(null)
                        }
                        className="rounded-xl bg-white px-4 py-2 shadow-sm"
                    >
                        Ganti Tipe
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
                    {products.map((product) => (
                        <MenuCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <OrderSummary />
        </div>
    );
}
