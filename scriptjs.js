// Функция для форматирования даты и времени
function updateDateTime() {
    const now = new Date(); // Получаем текущую дату/время

    // Массив месяцев по-английски (как в примере)
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // День, месяц, год
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    // Часы, минуты в 12-часовом формате
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Добавляем 0, если <10
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12 вместо 0
    const hoursStr = hours.toString().padStart(2, '0');

    // Формируем строку: "October 14, 2025, 02:30 PM"
    const formattedDateTime = `${month} ${day}, ${year}, ${hoursStr}:${minutes} ${ampm}`;

    // Выводим в блок на странице
    document.getElementById('datetime').textContent = formattedDateTime;
}

// Обновляем сразу при загрузке
updateDateTime();

// Обновляем каждую секунду (1000 мс)
setInterval(updateDateTime, 1000);