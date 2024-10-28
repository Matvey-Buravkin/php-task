<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

Route::get('/', [ProductController::class, 'index'])->name('products.index'); 
Route::get('/products/load-more', [ProductController::class, 'loadMore'])->name('products.load-more');
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');

Route::get('/cart', [CartController::class, 'index']); 
Route::post('/cart/add/{productId}', [CartController::class, 'addToCart'])->name('cart.add'); 
Route::delete('/cart/remove/{productId}', [CartController::class, 'remove']);
