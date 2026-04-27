<?php
namespace App\DTO;

class ProductCreateDto
{
    public string $name;
    public string $description;
    public float $price;
    public int $category_id;
}
