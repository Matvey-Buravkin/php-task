<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Models\Cart;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $cart = Cart::where('session_id', session()->getId())->get(); // Получаем данные из базы данных
        return view('cart', compact('cart'));
    }

    public function addToCart(Request $request, $productId)
    {
        $product = Product::find($productId);

        if ($product) {
            $cart = Cart::where('product_id', $productId)
                ->where('session_id', Session::getId())
                ->first();

            if ($cart) {
                $cart->quantity++;
                $cart->save();
            } else {
                $cart = new Cart();
                $cart->product_id = $productId;
                $cart->session_id = Session::getId();
                $cart->quantity = 1;
                $cart->save();
            }

            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
        }
    }

    public function remove(Request $request, $productId) {
        $cart = Cart::where('product_id', $productId)
                    ->where('session_id', session()->getId())
                    ->first();

                    if ($cart) {
                        if ($cart->quantity > 1) {
                            $cart->quantity--;
                            $cart->save();
                        } else {
                            $cart->delete();
                        }
                    }

        return response()->json(['success' => true]);
    }
}

