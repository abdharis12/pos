<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $todaySales = Order::query()
            ->whereDate(
                'created_at',
                today(),
            )
            ->sum('total');

        $todayTransactions =
            Order::query()
            ->whereDate(
                'created_at',
                today(),
            )
            ->count();

        $monthlySales = Order::query()
            ->whereMonth(
                'created_at',
                now()->month,
            )
            ->sum('total');

        $topProducts = Product::query()
            ->withSum(
                'orderItems',
                'qty',
            )
            ->orderByDesc(
                'order_items_sum_qty',
            )
            ->take(5)
            ->get();

        $cashSales = Order::query()
            ->whereDate(
                'created_at',
                today(),
            )
            ->where(
                'payment_method',
                'cash',
            )
            ->sum('total');

        $qrisSales = Order::query()
            ->whereDate(
                'created_at',
                today(),
            )
            ->where(
                'payment_method',
                'qris',
            )
            ->sum('total');

        return Inertia::render(
            'dashboard',
            [
                'todaySales' =>
                $todaySales,

                'todayTransactions' =>
                $todayTransactions,

                'monthlySales' =>
                $monthlySales,

                'topProducts' =>
                $topProducts,

                'cashSales' =>
                $cashSales,

                'qrisSales' =>
                $qrisSales,
            ],
        );
    }
}
