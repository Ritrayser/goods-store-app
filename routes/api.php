<?php

use App\Http\Controllers\AuthUserController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('products', ProductController::class)->only([
        'store',
        'update',
        'destroy',
    ]);
});

Route::apiResource('products', ProductController::class)->only([
    'index',
    'show',
]);

Route::post('login', [AuthUserController::class, 'login']);
