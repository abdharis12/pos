<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'sku',
        'description',
        'image',
        'price',
        'stock',
        'is_active',
    ];

    protected $appends = ['image_url'];

    public function category(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function orderItems(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(
            OrderItem::class,
        );
    }

    protected static function booted(): void
    {
        static::creating(function (
            Product $product,
        ) {

            if (!$product->sku) {

                $product->sku =
                    'PRD-' .
                    strtoupper(
                        str()->random(8),
                    );
            }
        });
    }

    public function getImageUrlAttribute(): ?string
    {
        return $this->image
            ? Storage::disk('tigris')->url($this->image)
            : null;
    }
}
