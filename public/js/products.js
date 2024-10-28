document.addEventListener('DOMContentLoaded', function () {
    const loadMoreButton = document.getElementById('loadMore');
    const productList = document.querySelector('.product-list');
    let currentPage = 1; 

    loadMoreButton.addEventListener('click', function() {
        currentPage++;

        fetch(`/products/load-more?page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                let html = '';
                data.data.forEach(product => {
                    html += '<div class="product-item">';
                    html += '<img src="' + product.image + '" alt="' + product.name + '">';
                    html += '<h3>' + product.name + '</h3>';
                    html += '<p class="product-price">' + product.price + ' руб.</p>';
                    html += '<button class="order-button" data-product-id="' + product.id + '">Заказать</button>';
                    html += '</div>';
                });

                productList.innerHTML += html; 

                // Добавляем обработчик события для новых кнопок "Заказать"
                const orderButtons = document.querySelectorAll('.order-button');
                orderButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const productId = button.dataset.productId;
                        addToCart(productId);
                    });
                });

                if (currentPage >= data.last_page) {
                    loadMoreButton.remove();
                }
            });
    });

    // Добавляем обработчик события для всех кнопок "Заказать" на странице
    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.dataset.productId;
            addToCart(productId);
        });
    });

    
    // Функция для добавления товара в корзину
    function addToCart(productId) {
        fetch('/cart/add/' + productId, {
            url: 'https://task-shop/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content // Получаем токен CSRF
            },
            body: JSON.stringify({
                product_id: productId
            })
        })
        .then(response => {
            if (response.ok) {
                const successPopup = document.createElement('div');
                successPopup.classList.add('popup', 'success');
                successPopup.textContent = 'Товар добавлен в корзину!';

                // Добавляем всплывающее окно на страницу
                document.body.appendChild(successPopup);

                // Удаляем всплывающее окно через 2 секунды
                setTimeout(() => {
                document.body.removeChild(successPopup);
                }, 2000);
            } else {
                // Обработка ошибки
                // Создаем всплывающее окно
                const errorPopup = document.createElement('div');
                errorPopup.classList.add('popup', 'error');
                errorPopup.textContent = 'Ошибка при добавлении товара в корзину!';

                // Добавляем всплывающее окно на страницу
                document.body.appendChild(errorPopup);

                // Удаляем всплывающее окно через 2 секунды
                setTimeout(() => {
                document.body.removeChild(errorPopup);
                }, 2000);
            }
        })
        .catch(error => {
            // Создаем всплывающее окно
            const errorPopup = document.createElement('div');
            errorPopup.classList.add('popup', 'error');
            errorPopup.textContent = 'Ошибка!';

            // Добавляем всплывающее окно на страницу
            document.body.appendChild(errorPopup);

            // Удаляем всплывающее окно через 2 секунды
            setTimeout(() => {
            document.body.removeChild(errorPopup);
            }, 2000);
        });
    }

    $(document).ready(function() {
        // Обработчик клика по изображению товара
        $('.product-item img').on('click', function() {
            var productId = $(this).closest('.product-item').find('.order-button').data('product-id');
            window.location.href = '/product/' + productId; // Перенаправление на страницу товара
        });
    });
    
});
