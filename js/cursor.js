const customCursor = document.querySelector('.custom-cursor');
let cursorX = window.innerWidth;
let cursorY = window.innerHeight;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
});

function updateCursor() {
    customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
}

// Запуск обновления позиции курсора
setInterval(updateCursor, 1); // Обновление каждые 1 миллисекунду (по меркам браузера, это близко к 60 FPS)
document.body.style.cursor = 'none';

setInterval(updateCursor, 1);