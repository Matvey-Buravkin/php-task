<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Магазин</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('../css/productSingle.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <header>
        <div class="logo">
            <a href="/">Главная</a>
        </div>
        <div class="phone">
            <a href="tel:+71234567890">+7 (123) 456-78-90</a>
        </div>
        <div class="cart">
            <a href="/cart" id="openCart">Корзина</a>
            <div id="cartList" class="cart-list">
                <!-- Здесь будет список товаров в корзине -->
            </div>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="product-details">
                <img src="{{ asset($product->image) }}" alt="{{ $product->name }}">
                <h2>{{ $product->name }}</h2>
                <p class="product-price">{{ $product->price }} руб.</p>
                <p class="product-description">{{ $product->description }}</p>
            </div>
        </div>
    </main>

    <footer>
        <div class="logo">
            <a href="/">Главная</a>
        </div>
        <div class="phone">
            <a href="tel:+71234567890">+7 (123) 456-78-90</a>
        </div>
    </footer>
</body>
</html>