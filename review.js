let arrayReview = [{
        imagePeoples: './picture/people1.jpeg',
        peopleReview: 'Спасибо большое за путешествие в Грузию, первый раз там был. В плане организации - все быстро и качественно, ответы и помощь по любым вопросам. Классный отель Zeg, отличная программа и экскурсии. Всем рекомендую',
        name: 'Паша<br>&starf; &starf; &starf; &starf; &starf;',
    },
    {
        imagePeoples: './picture/people2.jpeg',
        peopleReview: 'В мае ездили с друзьями в великолепный , насыщенный и запоминающийся тур во Львов. Путешествие по Львову было очень интересным, увлекательным и легким. Великолепная подача информации, очень познавательно и в тоже время весело и душевно.',
        name: 'Олечка<br>&starf; &starf; &starf; &starf; &star;',
    },
    {
        imagePeoples: './picture/people3.jpeg',
        peopleReview: 'Ездили в Египет, Хургада в июне 2021. Отель Dana beach resort 5* не оправдал мои ожидания: очень маленькая территория, ужасные рестораны, анимация, грязный пляж. ',
        name: 'Андрей<br>&starf; &star; &star; &star; &star;',
    },
    {
        imagePeoples: './picture/people4.jpeg',
        peopleReview: 'Впервые обратился в данную турфирму, были небольшие проблемы но тур оператор быстро решил их. Все понравилось.',
        name: 'Олег<br>&starf; &starf; &starf; &star; &star;'
    },
]

let imageElement = document.querySelector('.image');
let peopleReviewElement = document.querySelector('.people-review');
let nameElement = document.querySelector('.name');
let currentIndex = 0;

function changeReview() {
    let imagePeopleSrc = arrayReview[currentIndex];
    let imageSrc = imagePeopleSrc.imagePeoples
    imageElement.src = imageSrc;

    let peopleRev = arrayReview[currentIndex].peopleReview;
    peopleReviewElement.innerHTML = peopleRev;

    let name = arrayReview[currentIndex].name;
    nameElement.innerHTML = name
}

function showPrevReview() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = arrayaReview.length - 1;
    }
    changeReview()
}

function showNextReview() {
    currentIndex++
    if (currentIndex > 3) {
        currentIndex = 0;
    }
    changeReview()
}