document.addEventListener('DOMContentLoaded', () => {
    // Створюємо елемент модального вікна скрімера
    const screamerOverlay = document.createElement('div');
    screamerOverlay.id = 'screamerOverlay';
    screamerOverlay.className = 'screamer-overlay hidden';
    screamerOverlay.innerHTML = `
        <div class="screamer-content">
            <img src="https://i.imgflip.com/4/1h7in3.jpg" alt="Скрімер" class="screamer-img">
            <h1 class="screamer-text">УГА БУГААА! 🎃👻</h1>
        </div>
    `;
    document.body.appendChild(screamerOverlay);

    // Створюємо та налаштовуємо аудіо-елемент для гучного звуку
    const screamAudio = new Audio('https://www.soundjay.com/human/sounds/screaming-01.mp3');
    screamAudio.volume = 1.0; // Максимальна гучність

    // Отримуємо кнопкy підключення скрімера
    const dangerBtn = document.getElementById('dangerBtn');

    if (dangerBtn) {
        dangerBtn.addEventListener('click', () => {
            // Показуємо скрімер
            screamerOverlay.classList.remove('hidden');

            // Вмикаємо звук
            screamAudio.currentTime = 0;
            screamAudio.play().catch(e => console.log('Аудіо відтворення блоковано браузером:', e));

            // Автоматично ховаємо скрімер через 3.5 секунди
            setTimeout(() => {
                screamerOverlay.classList.add('hidden');
                screamAudio.pause();
            }, 3500);
        });
    }

    // Додатково: закриття скрімера по кліку на нього
    screamerOverlay.addEventListener('click', () => {
        screamerOverlay.classList.add('hidden');
        screamAudio.pause();
    });
});
