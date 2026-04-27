<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WebsiteController::class, 'home']);

// Route::middleware("auth:sanctum")->prefix('/admin')->group(function () {
//     Route::get('/', []);
// });

Route::prefix('/admin')->group(function () {
    Route::get('/', [AdminController::class, 'dashboard']);
    Route::get('/products', [AdminController::class, 'index'])->name('admin.products.index');
    Route::get('/products/create', [AdminController::class, 'create']);
    Route::post('/products', [AdminController::class, 'store'])->name('admin.products.store');
    Route::get('/products/{product}/edit', [AdminController::class, 'edit']);
    Route::put('/products/{product}', [AdminController::class, 'update']);
});