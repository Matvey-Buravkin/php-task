<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id', // ID товара
        'quantity', // Количество товара
    ];

    // Отношения с другими моделями (если нужно)
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
