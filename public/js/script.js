document.addEventListener('DOMContentLoaded', function () {
  const loadMoreButton = document.getElementById('loadMore');
  const productList = document.getElementById('productList');
  const openCartButton = document.getElementById('openCart');
  const cartList = document.getElementById('cartList');
  let offset = 0; // Начальный сдвиг
  let cart = []; // Массив для хранения товаров в корзине

  loadMoreButton.addEventListener('click', function() {
      const products = [
          { id: 1, name: 'Товар 1', image: '/image/image1.jpg', price: 1000 },
          { id: 2, name: 'Товар 2', image: '/image/image1.jpg', price: 1500 },
          { id: 3, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 4, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 5, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 6, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 7, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 8, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 9, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 10, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 11, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 12, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 13, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 14, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 15, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 16, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 17, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          { id: 18, name: 'Товар 3', image: '/image/image1.jpg', price: 2000 },
          // ... еще 19 товаров
      ];

      let html = '';
      for (let i = offset; i < offset + 12; i++) {
          if (i < products.length) {
              const product = products[i];
              html += '<div class="product">';
              html += '<img src="' + product.image + '" alt="' + product.name + '">';
              html += '<h3>' + product.name + '</h3>';
              html += '<p>' + product.price + ' руб.</p>';
              html += '<button class="order-button" data-product-id="' + product.id + '">Заказать</button>';
              html += '</div>';
          }
      }

      productList.innerHTML += html;
      offset += 12; // Обновляем сдвиг
      if (offset >= products.length) {
          loadMoreButton.style.display = 'none'; // Скрываем кнопку, если все товары показаны
      }

      // Добавляем обработчик кликов для кнопок "Заказать"
      const orderButtons = document.querySelectorAll('.order-button');
      orderButtons.forEach(button => {
          button.addEventListener('click', function() {
              const productId = parseInt(this.dataset.productId);
              addToCart(productId);
          });
      });
  });

  openCartButton.addEventListener('click', function() {
      cartList.classList.toggle('active');
      renderCart();
  });

  function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      cart.push(product);
      alert('Товар добавлен в корзину!');
  }

  function renderCart() {
      const cartList = document.getElementById('cartList');
      let html = '';
      if (cart.length > 0) {
          html += '<ul>';
          cart.forEach(product => {
              html += '<li>';
              html += '<img src="' + product.image + '" alt="' + product.name + '">';
              html += '<span>' + product.name + '</span>';
              html += '<span>' + product.price + ' руб.</span>';
              html += '</li>';
          });
          html += '</ul>';
      } else {
          html += '<p>Корзина пуста</p>';
      }
      cartList.innerHTML = html;
  }

  // Инициализируем показ первых 12 товаров
  loadMoreButton.click();
});
