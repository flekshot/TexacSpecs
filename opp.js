// --- 1. ТРЕБОВАНИЕ: Динамическое изменение стилей (Переключатель темы) ---

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    
    // Функция для сохранения и применения темы
    function applyTheme(theme) {
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

    // Проверяем сохраненную тему в Local Storage при загрузке страницы
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

    // --- (Опционально) Обновление времени, которое уже есть в ваших файлах ---

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