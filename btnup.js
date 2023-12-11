// Найти кнопку на странице
var btnUp = document.getElementById('btn-up');

// Добавить обработчик события на клик по кнопке
btnUp.addEventListener('click', function() {
    // Плавно переместиться в начало страницы
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
