<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Магазин</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    <title>Интернет магазин: @yield('title')</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>
<body>
    <header>
        <div class="logo">
            <a href="/"><img src="image/logo.png" alt="Логотип"></a>
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

    <div class = "container">
        @yield('content')
    </div>

    <footer>
        <div class="logo">
            <a href="/"><img src="image/logo.png" alt="Логотип"></a>
        </div>
        <div class="phone">
            <a href="tel:+71234567890">+7 (123) 456-78-90</a>
        </div>
    </footer>
</body>
</html>