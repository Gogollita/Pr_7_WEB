const menuButtons = document.querySelectorAll('.menu-btn');
const mobileMenus = document.querySelectorAll('.mobile-menu');

menuButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        mobileMenus[index].classList.toggle('hidden');
    });
});

const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    }
    else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const faqsData = [
    {
        question: 'Как записаться на приём?',
        answer: 'Записаться можно через форму на сайте в разделе «Контакты», по телефону +7 (XXX) XXX-XX-XX или в нашем Instagram. Мы подберём удобное для вас время и напомним о визите.'
    },
    {
        question: 'Сколько времени длится процедура?',
        answer: 'Маникюр с покрытием — около 1,5 часов.\nПедикюр — 1,5–2 часа.\nНаращивание — 2–2,5 часа.\nДизайн — от 30 минут в зависимости от сложности.\nТочное время уточняйте при записи.'
    },
    {
        question: 'Какие материалы вы используете?',
        answer: 'Мы работаем только с профессиональными брендами: премиальные гель-лаки, базы и топы, безопасные жидкости для снятия. Все материалы сертифицированы и гипоаллергенны.'
    },
    {
        question: 'Можно ли снимать гель-лак самостоятельно?',
        answer: 'Категорически не рекомендуем! Самостоятельное снятие может повредить ногтевую пластину. Лучше доверить это мастеру — мы аккуратно удалим покрытие без травм.'
    },
    {
        question: 'Что входит в стоимость маникюра?',
        answer: 'В базовую стоимость входит: обработка кутикулы, придание формы, выравнивание ногтей, подготовка к покрытию. Покрытие гель-лаком оплачивается отдельно или в составе комплексной услуги.'
    }
];

const faqContainer = document.getElementById('faqContainer');

/* Замена на вопросы*/

faqContainer.innerHTML = faqsData.map((faq, index) => `
<div class="faq-item flex flex-col items-start w-5/6 mb-4" data-index="${index}">
    <div class="faq-header flex items-center justify-between w-full cursor-pointer min-h-[48px] border border-indigo-100 p-4 rounded transition-all hover:bg-slate-50">
        <h2 class="text-sm font-medium">&nbsp;&nbsp;&nbsp;&nbsp;${faq.question}</h2> 
        <svg class="faq-icon transition-all duration-300 ease-in-out shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
    <div class="faq-answer overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out w-full">
        <p class="text-sm text-slate-500 p-4 pt-2">
            ${faq.answer.replace(/\n/g, '<br>')}
        </p>
    </div>
</div>
    `).join('');

let openIndex = null;

document.querySelectorAll('.faq-header').forEach((header, index) => {
    header.addEventListener('click', () => {
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allIcons = document.querySelectorAll('.faq-icon');

        allAnswers.forEach((el, i) => {
            if (i === index) {
                const isOpen = el.classList.contains('opacity-100');
                el.classList.toggle('opacity-100', !isOpen);
                el.classList.toggle('max-h-[300px]', !isOpen);
                el.classList.toggle('translate-y-0', !isOpen);
                el.classList.toggle('pt-4', !isOpen);
                el.classList.toggle('max-h-0', isOpen);
                el.classList.toggle('-translate-y-2', isOpen);
                allIcons[i].classList.toggle('rotate-180', !isOpen);
            } else {
                el.classList.remove('opacity-100', 'max-h-[300px]', 'translate-y-0', 'pt-4');
                el.classList.add('max-h-0', '-translate-y-2');
                allIcons[i].classList.remove('rotate-180');
            }
        });
    });
});

