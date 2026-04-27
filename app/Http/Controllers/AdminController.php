<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Services\ProductService;

class AdminController extends Controller
{
    public function __construct(private ProductService $productService)
    {

    }

    public function dashboard()
    {
        $productsCounter = Product::query()->count();
        $categoriesCounter = Category::query()->count();
        $usersCounter = User::query()->count();

        return Inertia::render('admin/Dashboard', [
            'productsCounter' => $productsCounter,
            'categoriesCounter' => $categoriesCounter,
            'usersCounter' => $usersCounter,
        ]);
    }

    public function index()
    {
        $products = $this->productService->getList();

        return Inertia::render('admin/products/Index', [
            'products' => $products
        ]);     
    }

    public function create()
    {
        return Inertia::render('admin/products/Create');     
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'        => 'required|string|max:255',
            'price'       => 'required|numeric|min:0',
            'description' => 'nullable|string',
        ]);

        Product::create($request->all());

        return redirect()->route('admin.products.index')->with('success', 'Товар создан!');
    }

    public function edit(Product $product)
    {
        return Inertia::render('admin/products/Edit', [
            'product' => $product
        ]);     
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name'        => 'required|string|max:255',
            'price'       => 'required|numeric|min:0',
            'description' => 'nullable|string',
        ]);

        $product->update($request->all());

        return redirect()->route('admin.products.index')->with('success', 'Товар обновлён!');
    }
}
