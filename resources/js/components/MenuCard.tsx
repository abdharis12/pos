import { Minus, Plus } from 'lucide-react';

import { formatRupiah } from '@/lib/currency';

import { Product } from '@/pages/pos/types';

import { usePosStore } from '@/pages/pos/stores/usePosStore';
import { Button } from './ui/button';

interface Props {
    product: Product;
}

export default function MenuCard({ product }: Props) {
    const addItem = usePosStore((state) => state.addItem);
    const removeItem = usePosStore((state) => state.removeItem);
    const cart = usePosStore((state) => state.cart);

    const item = cart.find((item) => item.product.id === product.id);
    const qty = item?.qty ?? 0;

    console.log('product:', product.name, '| image:', product.image);

    return (
        <div
            className={`
                group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300
                ${qty > 0
                    ? 'shadow-lg shadow-amber-200/60 ring-2 ring-amber-400'
                    : 'shadow-sm ring-1 ring-stone-200 hover:shadow-md hover:ring-stone-300'
                }
            `}
        >
            {/* Product image */}
            <div className="relative h-32 w-full overflow-hidden bg-stone-100">
                {product.image ? (
                    <img
                        src={`/storage/${product.image}`}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <span className="text-4xl">🍚</span>
                    </div>
                )}

                {qty > 0 && (
                    <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-[11px] font-black text-stone-900 shadow">
                        {qty}
                    </span>
                )}

                {qty > 0 && (
                    <div className="absolute inset-0 bg-amber-400/10" />
                )}
            </div>

            <div className="flex flex-1 flex-col bg-white p-3">
                <div className="mb-3 flex-1">
                    <h2 className="text-[13px] font-bold leading-snug tracking-tight text-stone-900">
                        {product.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-amber-500">
                        {formatRupiah(product.price)}
                    </p>
                </div>

                <div
                    className={`flex items-center rounded-2xl transition-all duration-300 ${qty > 0
                            ? 'justify-between bg-stone-900 p-1'
                            : 'justify-end'
                        }`}
                >
                    {qty > 0 && (
                        <>
                            <Button
                                onClick={() => removeItem(product.id)}
                                className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-700 text-white transition hover:bg-stone-600 active:scale-90"
                            >
                                <Minus className="h-3 w-3" />
                            </Button>

                            <span className="w-8 text-center text-sm font-black tabular-nums text-white">
                                {qty}
                            </span>
                        </>
                    )}

                    <Button
                        onClick={() => addItem(product)}
                        className={`cursor-pointer flex items-center justify-center rounded-xl bg-amber-400 text-stone-900 transition-all duration-200 hover:bg-amber-300 active:scale-90 ${qty > 0 ? 'h-8 w-8' : 'h-9 w-full gap-1.5 text-xs font-bold'
                            }`}
                    >
                        <Plus className="h-3.5 w-3.5" />
                        {qty === 0 && <span>Tambah</span>}
                    </Button>
                </div>
            </div>
        </div>
    );
}
