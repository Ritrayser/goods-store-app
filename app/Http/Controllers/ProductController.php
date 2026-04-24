<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use ProductService;
use ProductUpdateDto;
use ProductCreateDto;

class ProductController extends Controller
{

    public function __construct(private ProductService $productService) {}

    public function index()
    {
        return response()->json($this->productService->getList(), 200);
    }


    public function store(ProductRequest $request)
    {
        $productDto = new ProductCreateDto();

        $productDto->name = $request->name;

        $productDto->description = $request->description;

        $productDto->price = $request->price;

        $productDto->category_id = $request->category_id;

        $product = $this->productService->createProduct($productDto);

        return response()->json($product, 201);
    }


    public function show(int $id)
    {
        return response()->json($this->productService->getProduct($id), 200);
    }


    public function update(ProductRequest $request)
    {
        $productDto = new ProductUpdateDto();

        $productDto->id = $request->id;

        $productDto->name = $request->name;

        $productDto->description = $request->description;

        $productDto->price = $request->price;

        $productDto->category_id = $request->category_id;

        $product = $this->productService->updateProduct($productDto);

        return response()->json($product, 200);
    }


    public function destroy(int $id)
    {

        return response()->json($this->productService->deleteProduct($id), 204);
    }
}
