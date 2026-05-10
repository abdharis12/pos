<?php

namespace App\Http\Controllers\Pos;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::query()
            ->with([
                'items.product',
                'cashier',
            ])
            ->latest()
            ->paginate(10);

        return Inertia::render(
            'pos/orders/index',
            [
                'orders' => $orders,
            ],
        );
    }
}
