document.addEventListener('DOMContentLoaded', function() {
  const removeButtons = document.querySelectorAll('.remove-button');
 
  removeButtons.forEach(button => {
   button.addEventListener('click', function() {
    const productId = this.dataset.productId;
    const quantityInput = this.closest('tr').querySelector('.quantity-input'); // Получаем инпут количества

    // AJAX-запрос для удаления товара из корзины
    fetch('/cart/remove/' + productId, {
     method: 'DELETE',
     headers: {
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
     }
    })
    .then(response => {
       if (response.ok) {

        if (quantityInput && parseInt(quantityInput.value) > 1) {
          quantityInput.value = parseInt(quantityInput.value) - 1;
        }
        else {
         // Удаляем строку из таблицы
         this.closest('tr').remove();
 
         const successPopup = document.createElement('div');
         successPopup.classList.add('popup', 'success');
         successPopup.textContent = 'Товар удален из корзины!';

         // Добавляем всплывающее окно на страницу
         document.body.appendChild(successPopup);

         // Удаляем всплывающее окно через 2 секунды
         setTimeout(() => {
         document.body.removeChild(successPopup);
         }, 2000);
      }
      } else {
       // Обработка ошибки
       // Создаем всплывающее окно
       const errorPopup = document.createElement('div');
       errorPopup.classList.add('popup', 'error');
       errorPopup.textContent = 'Ошибка при удалении товара из корзины!';

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
   });
  });
 });