<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Services\ProductService;

class WebsiteController extends Controller
{
    public function __construct(private ProductService $productService)
    {

    }
    public function home()
    {
        $products = $this->productService->getList();

        return Inertia::render('Home', [
            'products' => $products
        ]);
    }
}
