document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return; 

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // отменяет перезагрузку страницы 
        
        const errors = this.parentNode.querySelectorAll('.text-sm.text-red-400.min-h-6');
        errors.forEach(el => el.remove());
        

        let isValid = true;
        
        const firstName = document.getElementById('firstname').value.trim();
        if (firstName === '') { 
            showError(firstname, 'Введите имя'); 
            isValid = false;
        }

        const lastName = document.getElementById('lastname').value.trim();
        if (lastName === '') { 
            showError(lastname, 'Введите фамилию'); 
            isValid = false;
        }

        const Email = document.getElementById('email').value.trim();
        if ((Email === '') || !Email.includes('@') || (!Email.includes('.'))) { 
            showError(email, 'Введите корректный email'); 
            isValid = false;
        }

        const Tel = document.getElementById('tel').value.trim();
        const telFull = Tel.replace(/\D/g, '');
        if ((Tel === '') || (telFull.length < 10)) { 
            showError(tel, 'Введите верный номер телефона'); 
            isValid = false;
        }

        const Date = document.getElementById('date');
        if (!Date.value) { 
            showError(date, 'Выберите дату'); 
            isValid = false;
        }

        const Agreement = document.getElementById('agreement');
        if (!Agreement.checked) { 
            showError(agreement, 'Необходима галочка'); 
            isValid = false;
        }
        //Проверяем на корректность и сохраняем данные в списке (?)
        if(isValid){
            const formData = {
                firstname: firstName,
                lastname: lastName,
                email: Email,
                tel: Tel,
                date: Date.value,
            };
            const event = new CustomEvent('formValid', { detail: formData }); //создаем событие formValid, которое хранит информацию из формы (дальше в consoleLogger.js)
            document.dispatchEvent(event); //"отправляем"

            console.log("Форма отправлена");
        }

        
        
    });

    function showError(input, message) {
        const help = document.createElement('p');
        help.classList.add('help', 'text-sm', 'text-red-400', 'min-h-6'); 
        help.textContent = message + '*';
        input.parentNode.appendChild(help); //создает p в родительском объекте input (крч, рядом с input)
        input.classList.remove('border-gray-300');
        input.classList.add('border-red-300');
    }

    let inputs = document.getElementsByTagName('input');

    Array.from(inputs).forEach(input => { 
        input.addEventListener('input', function() {
            const errors = this.parentNode.querySelectorAll('.text-sm.text-red-400.min-h-6');
            errors.forEach(el => el.remove());
            input.classList.remove('border-red-300');
            input.classList.add('border-gray-300');
        }
        );
    }); 

});
