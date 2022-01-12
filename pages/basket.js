const tours = [{
        id: 1,
        namePlace: 'Львов 2 ночи + Карпаты',
        price: '262 BYN',
    }, {
        id: 2,
        namePlace: 'Новый год в Питере + Карелия',
        price: '426 BYN',
    }, {
        id: 3,
        namePlace: 'Новый год во Львове + Карпаты',
        price: '424 BYN',
    }, {
        id: 4,
        namePlace: 'Львов 1 ноч + Карпаты',
        price: '162 BYN',
    },

]

let basketElement = document.querySelector('.basket');
let sumElement = document.querySelector('.sum-span')
let arrayBasket = [];


let tourName;
let tourPrice;
let idIndex;
let item;
let html;
let sum = 0;

function addTurLviv() {
    html = '';
    for (let i = 0; i < tours.length; i++) {
        tourName = tours[i].namePlace;
        tourPrice = tours[i].price;
        idIndex = tours[i].id;
        sum += parseInt(tourPrice);
        html += `<div class="basketType">
        <div class="tourName">${tourName}</div>
    <div class="tourPrice">${tourPrice}</div>
    <div class="deleteTur"><button onclick="deleteTur(${i})"><span class="material-icons">delete_outline</span></button></div>
    </div>`
    }

    basketElement.innerHTML = html;
    sumElement.innerHTML = sum;
    openBasket()
}

function openBasket() {
    basketElement.classList.toggle('open_basket')
}

// function addTurLviv() {

//     tourName = tours[1].namePlace;
//     tourPrice = tours[1].price;
//     html = '';
//     html += `<div class="tourName" iindex>${tourName}</div>
// <div class="tourPrice">${tourPrice}</div>
// <div class="deleteTur"><button onclick="deleteTur"><span class="material-icons">delete_outline</span></button></div>`

//     item = document.createElement('div');
//     item.classList.add('basketType');
//     item.innerHTML = html;
//     basketElement.prepend(item)
//     openBasketElement.classList.add('open_basket');
//     plusSum()
//     localStorage.setItem('html', html);
//     localStorage.setItem('sum', sum)

// }



function deleteTur() {


}