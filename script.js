// Отримуємо модальне вікно та кнопку для відкриття модального вікна
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');

// Отримуємо елемент для закриття модального вікна
const modalClose = document.getElementById('modal-close');

// Додаємо події для відкриття та закриття модального вікна
modalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Функція для відкриття модального вікна
function openModal() {
  modal.style.display = 'block';
}

// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = 'none';
}

// Функція для закриття модального вікна при кліку на зовнішню область
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}