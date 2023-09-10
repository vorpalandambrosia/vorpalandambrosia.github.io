const wordContainer = document.getElementById('angolenko');
const word = wordContainer.textContent.trim();
wordContainer.textContent = '';

for (const letter of word) {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.opacity = '0';
    span.style.transition = 'opacity 0.5s ease-in-out';

    wordContainer.appendChild(span);
}

let delay = 800; // Задержка для первой буквы
const letters = wordContainer.querySelectorAll('span');

// Массив для определения порядка появления букв
const order = [6, 2, 4, 1, 5, 0, 3, 8, 7]; // Пример порядка

order.forEach((index) => {
    setTimeout(() => {
        letters[index].style.opacity = '1';
    }, delay);
    delay += 400; // 100 миллисекунд для остальных букв
});





