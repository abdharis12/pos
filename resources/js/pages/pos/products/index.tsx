import {
    Head,
    Link,
    router,
} from '@inertiajs/react';

import { formatRupiah } from '@/lib/currency';

import {
    productsCreate,
    productsDestroy,
    productsEdit,
    productsIndex,
} from '@/routes';
import { Button } from '@/components/ui/button';

interface Product {
    id: number;

    name: string;

    sku: string;

    image: string | null;

    price: number;

    stock: number;

    is_active: boolean;

    category: {
        id: number;

        name: string;
    };
}

interface Props {
    products: {
        data: Product[];
    };

    filters: {
        search: string;
    };
}

export default function ProductIndex({
    products,
    filters,
}: Props) {
    return (
        <>
            <Head title="Products" />

            <div className="p-4 lg:p-6">
                {/* HEADER */}
                <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Products
                        </h1>

                        <p className="text-zinc-500">
                            Kelola produk POS
                        </p>
                    </div>

                    <Link
                        href={productsCreate()}
                        className="rounded-2xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
                    >
                        Tambah Product
                    </Link>
                </div>

                {/* SEARCH */}
                <div className="mb-6">
                    <input
                        type="text"
                        defaultValue={
                            filters.search
                        }
                        onChange={(e) =>
                            router.get(
                                productsIndex(),
                                {
                                    search:
                                        e
                                            .target
                                            .value,
                                },
                                {
                                    preserveState: true,
                                    replace: true,
                                },
                            )
                        }
                        placeholder="Search product..."
                        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* DESKTOP TABLE */}
                <div className="hidden overflow-hidden rounded-3xl border bg-white lg:block">
                    <table className="w-full">
                        <thead className="bg-zinc-100">
                            <tr>
                                <th className="px-6 py-4 text-left">
                                    Product
                                </th>

                                <th className="px-6 py-4 text-left">
                                    SKU
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Category
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Price
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Stock
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.data.map(
                                (
                                    product,
                                ) => (
                                    <tr
                                        key={
                                            product.id
                                        }
                                        className="border-t"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                {product.image ? (
                                                    <img
                                                        src={`/storage/${product.image}`}
                                                        alt={
                                                            product.name
                                                        }
                                                        className="h-16 w-16 rounded-2xl object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 text-sm text-zinc-400">
                                                        No Image
                                                    </div>
                                                )}

                                                <div>
                                                    <h3 className="font-semibold">
                                                        {
                                                            product.name
                                                        }
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4">
                                            {
                                                product.sku
                                            }
                                        </td>

                                        <td className="px-6 py-4">
                                            {
                                                product
                                                    .category
                                                    ?.name
                                            }
                                        </td>

                                        <td className="px-6 py-4 font-bold">
                                            {formatRupiah(
                                                product.price,
                                            )}
                                        </td>

                                        <td className="px-6 py-4">
                                            {
                                                product.stock
                                            }
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`rounded-xl px-3 py-1 text-sm font-semibold ${product.is_active
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                    }`}
                                            >
                                                {product.is_active
                                                    ? 'Active'
                                                    : 'Inactive'}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex justify-end gap-2">
                                                <Link
                                                    href={productsEdit(
                                                        product.id,
                                                    )}
                                                    className="rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-white"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => {
                                                        if (
                                                            confirm(
                                                                'Hapus product?',
                                                            )
                                                        ) {
                                                            router.delete(
                                                                productsDestroy(
                                                                    product.id,
                                                                ),
                                                            );
                                                        }
                                                    }}
                                                    className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>

                {/* MOBILE CARD */}
                <div className="space-y-4 lg:hidden">
                    {products.data.map(
                        (product) => (
                            <div
                                key={
                                    product.id
                                }
                                className="rounded-3xl border bg-white p-4"
                            >
                                <div className="flex gap-4">
                                    {product.image ? (
                                        <img
                                            src={`/storage/${product.image}`}
                                            alt={
                                                product.name
                                            }
                                            className="h-20 w-20 rounded-2xl object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-100 text-sm text-zinc-400">
                                            No Image
                                        </div>
                                    )}

                                    <div className="flex-1">
                                        <h3 className="font-bold">
                                            {
                                                product.name
                                            }
                                        </h3>

                                        <p className="text-sm text-zinc-500">
                                            {
                                                product
                                                    .category
                                                    ?.name
                                            }
                                        </p>

                                        <p className="mt-2 text-lg font-bold">
                                            {formatRupiah(
                                                product.price,
                                            )}
                                        </p>

                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="rounded-xl bg-zinc-100 px-3 py-1 text-sm">
                                                Stock:{' '}
                                                {
                                                    product.stock
                                                }
                                            </span>

                                            <span
                                                className={`rounded-xl px-3 py-1 text-sm font-semibold ${product.is_active
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                    }`}
                                            >
                                                {product.is_active
                                                    ? 'Active'
                                                    : 'Inactive'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex gap-2">
                                    <Link
                                        href={productsEdit(
                                            product.id,
                                        )}
                                        className="flex-1 rounded-2xl bg-yellow-500 py-3 text-center font-semibold text-white"
                                    >
                                        Edit
                                    </Link>

                                    <Button
                                        onClick={() => {
                                            if (
                                                confirm(
                                                    'Hapus product?',
                                                )
                                            ) {
                                                router.delete(
                                                    productsDestroy(
                                                        product.id,
                                                    ),
                                                );
                                            }
                                        }}
                                        className="cursor-pointer flex-1 rounded-2xl bg-red-600 py-3 font-semibold text-white"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </>
    );
}
