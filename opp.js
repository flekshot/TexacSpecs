
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    
    function applyTheme(theme) {
        // Добавляем звуковой эффект
        const toggleSound = new Audio('sound.mp3');
        toggleSound.play().catch(error => {
            console.warn("Audio playback failed:", error);
        });

        if (theme === 'dark') {
            body.classList.add('dark-theme');
            themeToggleBtn.textContent = '☀️ День';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            themeToggleBtn.textContent = '🌙 Ночь';
            localStorage.setItem('theme', 'day');
        }
    }

    
    const savedTheme = localStorage.getItem('theme') || 'day';
    applyTheme(savedTheme);

    // Слушатель события для переключения темы (ТРЕБОВАНИЕ: Event Handling)
    themeToggleBtn.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            applyTheme('day'); // Переключаемся на дневную
        } else {
            applyTheme('dark'); // Переключаемся на ночную
        }
    });

    

    // Функция для обновления текущей даты и времени
    function updateDateTime() {
        const datetimeElement = document.getElementById('datetime');
        if (datetimeElement) {
            const now = new Date();
            // Пример форматирования: 21.10.2025 17:12:30
            const dateStr = now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
            const timeStr = now.toLocaleTimeString('ru-RU');
            datetimeElement.textContent = `${dateStr} ${timeStr}`;
        }
    }

    // Обновляем время сразу и затем каждую секунду
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
document.addEventListener('keydown', function(e) {
    // Получаем текущую тему из localStorage
    const currentTheme = localStorage.getItem('theme') || 'day';
    
    // Проверяем, на какую клавишу нажали
    switch (e.key.toLowerCase()) {
        case 'n': // Клавиша 'N' для Ночи (Night)
            // Если сейчас не тёмная тема, переключаем
            if (currentTheme !== 'dark') {
                applyTheme('dark'); 
            }
            break;
        case 'd': // Клавиша 'D' для Дня (Day)
            // Если сейчас не дневная тема, переключаем
            if (currentTheme !== 'day') {
                applyTheme('day');
            }
            break;
    }
});
const quizForm = document.getElementById('quizForm');
if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // --- КОД ДЛЯ ЗВУКОВОГО ЭФФЕКТА ---
        const checkSound = new Audio('check.mp3'); // Убедитесь, что файл 'check.mp3' есть
    checkSound.play().catch(error => {
        // Это нужно для обхода ограничений браузеров на автовоспроизведение
        console.warn("Audio playback failed:", error);
    });

    const results = document.getElementById('results'); // Предполагается, что есть элемент с id="results"
    const score = 0; // Пример значения, замените на реальную логику подсчета
    const quizData = []; // Пример значения, замените на реальные данные викторины

    results.innerHTML += `<h3>Ваш счет: ${score} из ${quizData.length}</h3>`;
    
    // Анимация (ТРЕБОВАНИЕ: JS-driven Animation)
    if (score === 0) {
            results.classList.add('shake-animation');
            // Удаляем класс через 500 мс, чтобы анимация могла быть запущена снова
            setTimeout(() => {
                results.classList.remove('shake-animation');
            }, 500); 
        }
    }
);
}