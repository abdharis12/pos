<?php

namespace App\Http\Controllers\Pos;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PosPageController extends Controller
{
    public function __invoke()
    {
        $products = Product::query()
            ->where('is_active', true)
            ->with('category')
            ->orderBy('name')
            ->get();

        return Inertia::render('pos/index', [
            'products' => $products,
        ]);
    }
}
