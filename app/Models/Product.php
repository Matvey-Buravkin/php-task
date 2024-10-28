<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', // Название товара
        'description', // Описание товара
        'price', // Цена товара
        'image', // Путь к изображению товара
    ];
}
