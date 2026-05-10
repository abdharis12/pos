<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $bubur = Category::create([
            'name' => 'Bubur',
            'slug' => 'bubur',
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $naskun = Category::create([
            'name' => 'Nasi Kuning',
            'slug' => 'nasi-kuning',
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $minuman = Category::create([
            'name' => 'Minuman',
            'slug' => 'minuman',
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        Product::insert([
            [
                'category_id' => $bubur->id,
                'name' => 'Bubur Ayam Original',
                'sku' => Str::uuid(),
                'image' => 'products/bubur-original.jpg',
                'description' => 'Bubur ayam original dengan topping ayam suwir, daun seledri, kuah kuning dan kerupuk.',
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
                'image' => 'products/bubur-spesial.jpg',
                'description' => 'Bubur ayam spesial dengan telur dan topping lengkap.',
                'price' => 18000,
                'stock' => 999,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'category_id' => $naskun->id,
                'name' => 'Nasi Kuning',
                'sku' => Str::uuid(),
                'image' => 'products/nasi-kuning.jpg',
                'description' => 'Nasi kuning dengan telur dan topping lengkap ayam suwir + ikan suwir cakalang.',
                'price' => 25000,
                'stock' => 999,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'category_id' => $minuman->id,
                'name' => 'Air Mineral',
                'sku' => Str::uuid(),
                'image' => 'products/air-mineral.jpg',
                'description' => 'Air mineral dingin 600ml.',
                'price' => 3000,
                'stock' => 999,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
