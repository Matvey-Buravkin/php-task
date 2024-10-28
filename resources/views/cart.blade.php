@extends('master')

@section('content')
<head>
    <link rel="stylesheet" href="{{ asset('../css/cart.css') }}">
</head>
    <div class="container">
        <h2>Моя корзина</h2>
        @if(count($cart) > 0)
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($cart as $item)
                        <tr>
                            <td>{{ $item->product->name }}</td>
                            <td>{{ $item->product->price }} руб.</td>
                            <td>
                                <input type="number" class="quantity-input" value="{{ $item->quantity }}" min="1" readonly>
                            </td>
                            <td>{{ $item->product->price * $item->quantity }} руб.</td>
                            <td>
                                <button class="remove-button" data-product-id="{{ $item->product->id }}">Удалить</button> 
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <p class="empty-cart">Ваша корзина пуста.</p> 
        @endif
    </div>
    <script src="{{ asset('../../js/cart.js') }}"></script> 
@endsection
