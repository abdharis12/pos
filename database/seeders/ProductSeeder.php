<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bubur = Category::create([
            'name' => 'Bubur',
            'slug' => 'bubur',
        ]);

        $minuman = Category::create([
            'name' => 'Minuman',
            'slug' => 'minuman',
        ]);

        Product::insert([
            [
                'category_id' => $bubur->id,
                'name' => 'Bubur Ayam Original',
                'sku' => Str::uuid(),
                'price' => 15000,
                'stock' => 999,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category_id' => $bubur->id,
                'name' => 'Bubur Ayam Spesial',
                'sku' => Str::uuid(),
                'price' => 18000,
                'stock' => 999,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category_id' => $minuman->id,
                'name' => 'Air Mineral',
                'sku' => Str::uuid(),
                'price' => 3000,
                'stock' => 999,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
