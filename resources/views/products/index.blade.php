@extends('master')

@section('content')
<head>
    <link rel="stylesheet" href="{{ asset('../css/products.css') }}">
</head>
    <main>
        <div class="container">
            <h2>Наши товары</h2>
            <div class="product-list">
                @foreach ($products as $product)
                    <div class="product-item">
                            <img src="{{ asset($product->image) }}" alt="{{ $product->name }}">
                            <h3>{{ $product->name }}</h3>
                            <p class="product-price">{{ $product->price }} руб.</p>
                            <button class="order-button" data-product-id="{{ $product->id }}">Заказать</button>
                    </div>
                @endforeach
            </div>
        </div>
        <button class="show-more" id="loadMore" data-total-pages="{{ $products->lastPage() }}">Показать ещё</button>
    </main>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('../../js/products.js') }}"></script> 
    <script src="{{ asset('../../js/productSingle.js') }}"></script> 
@endsection
