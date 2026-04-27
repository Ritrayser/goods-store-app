<?php
namespace App\Services;

use App\Models\Product;
use App\DTO\ProductCreateDto;
use App\DTO\ProductUpdateDto;

class ProductService
{

    public function getList()
    {
        return Product::query()->paginate(10);
    }

    public function createProduct(ProductCreateDto $productCreateDto)
    {
        return Product::create([
            'name' => $productCreateDto->name,
            'description' => $productCreateDto->description,
            'price' => $productCreateDto->price,
            'category_id' => $productCreateDto->category_id,
        ]);
    }

    public function getProduct(int $id): Product
    {
        return Product::query()->findOrFail($id);
    }

    public function updateProduct(ProductUpdateDto $productUpdateDto)
    {
        return Product::update([
            'id' => $productUpdateDto->id,
            'name' => $productUpdateDto->name,
            'description' => $productUpdateDto->description,
            'price' => $productUpdateDto->price,
            'category_id' => $productUpdateDto->category_id,
        ]);
    }

    public function deleteProduct(int $id): bool
    {
        $product = Product::findOrFail($id);

        return  $product->delete();
    }
}
