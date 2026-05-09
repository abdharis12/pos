<?php

namespace App\Models;

use App\Enums\OrderStatusEnum;
use App\Enums\OrderTypeEnum;
use App\Enums\PaymentMethodEnum;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'invoice_number',
        'customer_name',
        'table_number',
        'order_type',
        'payment_method',
        'status',
        'subtotal',
        'total',
        'paid_amount',
        'change_amount',
        'cashier_id',
    ];

    protected $casts = [
        'order_type' => OrderTypeEnum::class,
        'payment_method' => PaymentMethodEnum::class,
        'status' => OrderStatusEnum::class,
    ];

    public function items(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function cashier(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'cashier_id');
    }
}
