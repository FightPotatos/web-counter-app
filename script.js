document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы DOM
    const resultElement = document.getElementById('result');
    const plusBtn = document.getElementById('plusBtn');
    const minusBtn = document.getElementById('minusBtn');
    const resetBtn = document.getElementById('resetBtn');
    const messageElement = document.getElementById('message');
    
    let count = 0;
    
    // Функция обновления отображения счетчика
    function updateCounter() {
        resultElement.textContent = count;
        
        // Изменение цвета фона в зависимости от значения
        if (count === 0) {
            // Красный градиент для нуля
            resultElement.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)';
        } else if (count > 0) {
            // Желтый градиент для положительных значений
            resultElement.style.background = 'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)';
        } else {
            // Зеленый градиент для отрицательных значений
            resultElement.style.background = 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)';
        }
        
        // Проверка на экстремальные значения и блокировка кнопок
        if (count >= 10) {
            plusBtn.disabled = true;
            plusBtn.innerHTML = '<i class="fas fa-ban"></i> Заблокировано';
            showMessage('Вы достигли экстремального значения: +10');
        } else {
            plusBtn.disabled = false;
            plusBtn.innerHTML = '<i class="fas fa-plus"></i> Плюс';
        }
        
        if (count <= -10) {
            minusBtn.disabled = true;
            minusBtn.innerHTML = '<i class="fas fa-ban"></i> Заблокировано';
            showMessage('Вы достигли экстремального значения: -10');
        } else {
            minusBtn.disabled = false;
            minusBtn.innerHTML = '<i class="fas fa-minus"></i> Минус';
        }
        
        // Скрываем сообщение, если значение не экстремальное
        if (count !== 10 && count !== -10) {
            hideMessage();
        }
    }
    
    // Функция показа сообщения
    function showMessage(text) {
        messageElement.textContent = text;
        messageElement.classList.add('show');
    }
    
    // Функция скрытия сообщения
    function hideMessage() {
        messageElement.classList.remove('show');
        setTimeout(() => {
            messageElement.textContent = '';
        }, 300);
    }
    
    // Функция увеличения счетчика
    function incrementCounter() {
        if (count < 10) {
            count++;
            updateCounter();
        }
    }
    
    // Функция уменьшения счетчика
    function decrementCounter() {
        if (count > -10) {
            count--;
            updateCounter();
        }
    }
    
    // Функция сброса счетчика
    function resetCounter() {
        count = 0;
        updateCounter();
        hideMessage();
    }
    
    // Добавляем обработчики событий для кнопок
    plusBtn.addEventListener('click', incrementCounter);
    minusBtn.addEventListener('click', decrementCounter);
    resetBtn.addEventListener('click', resetCounter);
    
    // Добавляем обработчики для клавиатуры
    document.addEventListener('keydown', function(event) {
        if (event.key === '+' || event.key === '=' || event.key === 'ArrowUp') {
            incrementCounter();
            event.preventDefault();
        } else if (event.key === '-' || event.key === '_' || event.key === 'ArrowDown') {
            decrementCounter();
            event.preventDefault();
        } else if (event.key === 'r' || event.key === 'R' || event.key === '0') {
            resetCounter();
            event.preventDefault();
        }
    });
    
    // Инициализация счетчика
    updateCounter();
    
    // Добавляем анимацию при загрузке
    resultElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        resultElement.style.transform = 'scale(1)';
    }, 300);
    
    // Добавляем информацию о управлении с клавиатуры
    console.log('Управление счетчиком:');
    console.log('- Нажмите "+" или "стрелка вверх" для увеличения');
    console.log('- Нажмите "-" или "стрелка вниз" для уменьшения');
    console.log('- Нажмите "R" или "0" для сброса');
});
