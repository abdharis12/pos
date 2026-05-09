<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Pos\CheckoutController;
use App\Http\Controllers\Pos\OrderController;
use App\Http\Controllers\Pos\PosPageController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::get('/pos', PosPageController::class)->name('posIndex');
    Route::post('/pos/checkout', CheckoutController::class)->name('posCheckout');
    Route::get('/pos/orders', [OrderController::class, 'index'])->name('posOrders');
});

require __DIR__ . '/settings.php';
