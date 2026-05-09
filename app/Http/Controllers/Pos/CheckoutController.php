<?php

namespace App\Http\Controllers\Pos;

use App\Enums\OrderStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Pos\CheckoutRequest;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    public function __invoke(
        CheckoutRequest $request,
    ) {
        return DB::transaction(
            function () use ($request) {

                $products = Product::query()
                    ->whereIn(
                        'id',
                        collect(
                            $request->items,
                        )->pluck(
                            'product_id',
                        ),
                    )
                    ->get()
                    ->keyBy('id');

                $subtotal = 0;

                foreach (
                    $request->items
                    as $item
                ) {
                    $product =
                        $products[$item['product_id']];

                    $subtotal +=
                        $product->price *
                        $item['qty'];
                }

                $paidAmount =
                    $request->paid_amount ??
                    0;

                $changeAmount = max(
                    0,
                    $paidAmount -
                        $subtotal,
                );

                $order = Order::create([
                    'invoice_number' => $this->generateInvoice(),

                    'customer_name' => $request->customer_name,

                    'order_type' => $request->order_type,

                    'payment_method' => $request->payment_method,

                    'status' => OrderStatusEnum::PAID,

                    'subtotal' => $subtotal,

                    'total' => $subtotal,

                    'paid_amount' => $paidAmount,

                    'change_amount' => $changeAmount,

                    'cashier_id' => auth()->id(),
                ]);

                foreach (
                    $request->items
                    as $item
                ) {
                    $product =
                        $products[$item['product_id']];

                    $order->items()->create([
                        'product_id' => $product->id,

                        'qty' => $item['qty'],

                        'price' => $product->price,

                        'subtotal' =>
                        $product->price *
                            $item['qty'],
                    ]);
                }

                return back()->with([
                    'success' => 'Checkout berhasil',
                    'invoice_number' => $order->invoice_number,
                ]);
            },
        );
    }

    private function generateInvoice(): string
    {
        return 'INV-' .
            now()->format('YmdHis');
    }
}
