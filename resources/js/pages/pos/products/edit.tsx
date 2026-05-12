import { Head, useForm } from '@inertiajs/react';
import { productsUpdate } from '@/routes';
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';

interface Category {
    id: number;
    name: string;
}

interface Product {
    id: number;
    category_id: number;
    name: string;
    sku: string;
    description: string | null;
    image: string | null;
    image_url: string | null;
    price: number;
    stock: number;
    is_active: boolean;
}

interface Props {
    categories: Category[];
    product: Product;
}

const Field = ({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) => (
    <div className="grid gap-1.5">
        <label className="text-xs font-bold uppercase tracking-widest text-stone-400">
            {label}
        </label>
        {children}
        {error && <p className="text-xs font-medium text-red-400">{error}</p>}
    </div>
);

const inputCls =
    'w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-sm text-white placeholder-stone-500 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20';

export default function ProductEdit({ categories, product }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [preview, setPreview] = useState<string | null>(
        product.image_url ?? null,
    );

    const { data, setData, put, processing, errors } = useForm({
        category_id: String(product.category_id),
        name: product.name,
        sku: product.sku,
        description: product.description ?? '',
        image: null as File | null,
        price: String(product.price),
        stock: String(product.stock),
        is_active: product.is_active,
    });

    const handleImage = (file: File) => {
        setData('image', file);
        setPreview(URL.createObjectURL(file));
    };

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) handleImage(file);
    };

    const submit = () => {
        put(productsUpdate(product.id), { forceFormData: true });
    };

    return (
        <>
            <Head title="Edit Produk" />

            <div className="min-h-screen bg-stone-50 p-4 lg:p-6">
                {/* Header */}
                <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
                        Produk
                    </p>
                    <h1 className="mt-0.5 text-2xl font-black tracking-tight text-stone-900 lg:text-3xl">
                        Edit Produk
                    </h1>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-4 lg:grid-cols-3">

                        {/* LEFT — main fields */}
                        <div className="space-y-4 lg:col-span-2">
                            <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
                                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-stone-400">
                                    Informasi Produk
                                </p>

                                <div className="grid gap-4">
                                    <Field label="Nama Produk" error={errors.name}>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="Masukkan nama produk"
                                            className={inputCls}
                                        />
                                    </Field>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Field label="Kategori" error={errors.category_id}>
                                            <select
                                                value={data.category_id}
                                                onChange={(e) => setData('category_id', e.target.value)}
                                                className={inputCls}
                                            >
                                                <option value="">Pilih kategori</option>
                                                {categories.map((c) => (
                                                    <option key={c.id} value={c.id}>{c.name}</option>
                                                ))}
                                            </select>
                                        </Field>

                                        <Field label="SKU">
                                            <input
                                                type="text"
                                                value={data.sku}
                                                onChange={(e) => setData('sku', e.target.value)}
                                                placeholder="SKU-001"
                                                className={inputCls}
                                            />
                                        </Field>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Field label="Harga" error={errors.price}>
                                            <div className="relative">
                                                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-stone-500">
                                                    Rp
                                                </span>
                                                <input
                                                    type="number"
                                                    value={data.price}
                                                    onChange={(e) => setData('price', e.target.value)}
                                                    placeholder="0"
                                                    className={`${inputCls} pl-10`}
                                                />
                                            </div>
                                        </Field>

                                        <Field label="Stok" error={errors.stock}>
                                            <input
                                                type="number"
                                                value={data.stock}
                                                onChange={(e) => setData('stock', e.target.value)}
                                                placeholder="0"
                                                className={inputCls}
                                            />
                                        </Field>
                                    </div>

                                    <Field label="Deskripsi">
                                        <textarea
                                            rows={4}
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            placeholder="Deskripsi produk (opsional)"
                                            className={`${inputCls} resize-none`}
                                        />
                                    </Field>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="space-y-4">
                            {/* Image upload */}
                            <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
                                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                                    Foto Produk
                                </p>

                                <div
                                    onDrop={onDrop}
                                    onDragOver={(e) => e.preventDefault()}
                                    onClick={() => inputRef.current?.click()}
                                    className="relative flex h-52 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 transition hover:border-amber-400 hover:bg-amber-50/30"
                                >
                                    {preview ? (
                                        <>
                                            <img
                                                src={preview}
                                                className="h-full w-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPreview(null);
                                                    setData('image', null);
                                                }}
                                                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-stone-900/70 text-white transition hover:bg-stone-900"
                                            >
                                                <X className="h-3.5 w-3.5" />
                                            </button>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center gap-2 text-center">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100">
                                                <ImagePlus className="h-5 w-5 text-stone-400" />
                                            </div>
                                            <p className="text-sm font-semibold text-stone-600">
                                                Drag & drop atau klik
                                            </p>
                                            <p className="text-xs text-stone-400">PNG, JPG, WEBP</p>
                                        </div>
                                    )}
                                </div>

                                <input
                                    ref={inputRef}
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const file = e.target.files?.[0];
                                        if (file) handleImage(file);
                                    }}
                                />
                            </div>

                            {/* Status */}
                            <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
                                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                                    Status Produk
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setData('is_active', !data.is_active)}
                                    className={`relative w-full overflow-hidden rounded-2xl p-4 text-sm font-bold transition-all duration-300 ${data.is_active
                                            ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                                            : 'bg-stone-100 text-stone-500 ring-1 ring-stone-200'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{data.is_active ? 'Aktif' : 'Nonaktif'}</span>
                                        <div
                                            className={`flex h-6 w-11 items-center rounded-full transition-all duration-300 ${data.is_active ? 'bg-emerald-500' : 'bg-stone-300'
                                                }`}
                                        >
                                            <div
                                                className={`h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 ${data.is_active ? 'translate-x-5' : 'translate-x-0.5'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                </button>
                            </div>

                            {/* Actions */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    className="rounded-2xl border border-stone-200 bg-white py-3.5 text-sm font-bold text-stone-600 transition hover:bg-stone-50 active:scale-95"
                                >
                                    Batal
                                </button>

                                <button
                                    type="button"
                                    disabled={processing}
                                    onClick={submit}
                                    className="rounded-2xl bg-amber-400 py-3.5 text-sm font-black text-stone-900 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 active:scale-95 disabled:bg-stone-200 disabled:text-stone-400 disabled:shadow-none"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan'}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
