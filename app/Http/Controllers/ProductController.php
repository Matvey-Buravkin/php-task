<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Product; // Импортируйте модель Product

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::paginate(12); // Получение всех товаров

        return view('products.index', compact('products')); // Передача данных в представление
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);
        return view('product', compact('product'));
    }

    public function loadMore(Request $request)
    {
        $page = $request->query('page'); // Получаем номер страницы из запроса
        $products = Product::paginate(12, ['*'], 'page', $page)->withQueryString(); // Paginate с заданной страницей

        return response()->json([
            'data' => $products->items(), // Массив с данными товаров
            'last_page' => $products->lastPage(), // Номер последней страницы
        ]);
    }

    public function store(Request $request) {
      // ...
      $path = $request->file('image')->store('public/image'); // Сохранение изображения в папку storage/app/public/products
      $product->image = $path; // Запись пути в поле 'image' модели
      // ...
    }
}
