<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Pos\CheckoutController;
use App\Http\Controllers\Pos\OrderController;
use App\Http\Controllers\Pos\PosPageController;
use App\Http\Controllers\Pos\ProductController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => false,
])->name('home');

Route::get('/register', fn() => abort(404));

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::get('/pos', PosPageController::class)->name('posIndex');
    Route::post('/pos/checkout', CheckoutController::class)->name('posCheckout');
    Route::get('/pos/orders', [OrderController::class, 'index'])->name('posOrders');
    Route::get('/pos/products', [ProductController::class, 'index'])->name('productsIndex');
    Route::get('/pos/products/create', [ProductController::class, 'create'])->name('productsCreate');
    Route::post('/pos/products', [ProductController::class, 'store'])->name('productsStore');
    Route::get('/pos/products/{product}/edit', [ProductController::class, 'edit'])->name('productsEdit');
    Route::put('/pos/products/{product}', [ProductController::class, 'update'])->name('productsUpdate');
    Route::delete('/pos/products/{product}', [ProductController::class, 'destroy'])->name('productsDestroy');
});

require __DIR__ . '/settings.php';
