document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('formValid', function(event) {
        // Получаем данные формы из события 
        const formData = event.detail;

        console.clear();  // Очистка консоли

        console.log('Имя:', formData.firstname);
        console.log('Фамилия:', formData.lastname);
        console.log('Почта:', formData.email);
        console.log('Номер телефона:', formData.tel);
        console.log('Дата:', formData.date);

    });
});