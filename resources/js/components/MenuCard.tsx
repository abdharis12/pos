import { Minus, Plus } from 'lucide-react';

import { formatRupiah } from '@/lib/currency';

import { Product } from '@/pages/pos/types';

import { usePosStore } from '@/pages/pos/stores/usePosStore';

interface Props {
    product: Product;
}

export default function MenuCard({
    product,
}: Props) {
    const addItem = usePosStore(
        (state) => state.addItem,
    );

    const removeItem = usePosStore(
        (state) => state.removeItem,
    );

    const cart = usePosStore(
        (state) => state.cart,
    );

    const item = cart.find(
        (item) =>
            item.product.id === product.id,
    );

    const qty = item?.qty ?? 0;

    return (
        <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="mb-4">
                <h2 className="text-lg font-bold">
                    {product.name}
                </h2>

                <p className="mt-1 text-zinc-500">
                    {formatRupiah(
                        product.price,
                    )}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <button
                    onClick={() =>
                        removeItem(product.id)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100"
                >
                    <Minus className="h-4 w-4" />
                </button>

                <span className="text-lg font-bold">
                    {qty}
                </span>

                <button
                    onClick={() =>
                        addItem(product)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white"
                >
                    <Plus className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
