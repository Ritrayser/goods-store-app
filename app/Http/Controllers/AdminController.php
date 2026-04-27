<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Services\ProductService;

class AdminController extends Controller
{
    public function __construct(private ProductService $productService) {}

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

    public function store(ProductRequest $request)
    {

        Product::create($request->all());

        return redirect()->route('admin.products.index')->with('success', 'Товар создан!');
    }

    public function edit(Product $product)
    {
        return Inertia::render('admin/products/Edit', [
            'product' => $product
        ]);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $product->update($request->all());

        return redirect()->route('admin.products.index')->with('success', 'Товар обновлён!');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('admin.products.index')->with('success', 'Товар удален!');
    }
}
