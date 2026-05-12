<?php

namespace App\Http\Controllers\Pos;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ProductController extends Controller
{
    public function index(
        Request $request,
    ): Response {

        $products = Product::query()
            ->with('category')
            ->when(
                $request->search,
                fn($query) =>
                $query->where(
                    'name',
                    'like',
                    '%' .
                        $request->search .
                        '%',
                ),
            )
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render(
            'pos/products/index',
            [
                'products' => $products,
                'filters' => [
                    'search' =>
                    $request->search,
                ],
            ],
        );
    }

    public function create(): Response
    {
        return Inertia::render(
            'pos/products/create',
            [
                'categories' => Category::query()
                    ->orderBy('name')
                    ->get(),
            ],
        );
    }

    public function store(
        ProductRequest $request,
    ): RedirectResponse {

        $image = null;

        if (
            $request->hasFile('image')
        ) {

            $image = $request
                ->file('image')
                ->store(
                    'products',
                    'tigris',
                );
        }

        Product::create([
            'category_id' => $request->category_id,
            'name' => $request->name,
            'sku' => $request->sku,
            'description' => $request->description,
            'image' => $image,
            'price' => $request->price,
            'stock' => $request->stock,
            'is_active' =>
            $request->boolean(
                'is_active',
            ),
        ]);

        return redirect()
            ->route(
                'productsIndex',
            )
            ->with(
                'success',
                'Produk berhasil dibuat',
            );
    }

    public function edit(Product $product): Response
    {
        return Inertia::render('pos/products/edit', [
            'product'    => array_merge($product->toArray(), [
                'image_url' => $product->image
                    ? Storage::disk('tigris')->url($product->image)
                    : null,
            ]),
            'categories' => Category::orderBy('name')->get(),
        ]);
    }

    public function update(
        ProductRequest $request,
        Product $product,
    ): RedirectResponse {

        $data = $request->validated();

        $data['image'] = $product->image;

        if ($request->hasFile('image')) {

            // ✅ Fix: hapus dari tigris, bukan public
            if ($product->image && Storage::disk('tigris')->exists($product->image)) {
                Storage::disk('tigris')->delete($product->image);
            }

            $data['image'] = $request
                ->file('image')
                ->store('products', 'tigris');
        }

        $product->update([
            'category_id' => $data['category_id'],
            'name'        => $data['name'],
            'sku'         => $data['sku'],
            'description' => $data['description'],
            'image'       => $data['image'],
            'price'       => $data['price'],
            'stock'       => $data['stock'],
            'is_active'   => $request->boolean('is_active'),
        ]);

        return redirect()
            ->route('productsIndex')
            ->with('success', 'Produk berhasil diupdate');
    }

    public function destroy(
        Product $product,
    ): RedirectResponse {

        // ✅ Fix: hapus dari tigris, bukan public
        if ($product->image) {
            Storage::disk('tigris')->delete($product->image);
        }

        $product->delete();

        return back()->with('success', 'Produk berhasil dihapus');
    }
}
