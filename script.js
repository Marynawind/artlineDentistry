document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить отправку формы по умолчанию

    var formData = new FormData(this);

    // Создать объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Установить URL и метод запроса
    xhr.open('POST', 'artline_dental@gmail.com', true);

    // Установить заголовок запроса, если необходимо
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Обработчик события, вызываемый при завершении запроса
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Обработать успешный ответ от сервера
            console.log(xhr.responseText);
        } else {
            // Обработать ошибку
            console.error('Произошла ошибка при отправке запроса.');
        }
    };

    // Обработчик события, вызываемый при ошибке запроса
    xhr.onerror = function() {
        console.error('Произошла ошибка при отправке запроса.');
    };

    // Отправить данные формы на сервер
    xhr.send(formData);
});
