<?php
namespace App\DTO;

class ProductUpdateDto
{
    public int $id;
    public string $name;
    public string $description;
    public float $price;
    public int $category_id;
}
