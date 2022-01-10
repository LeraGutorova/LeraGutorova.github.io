const tours = [{
        namePlace: 'Львов 2 ночи + Карпаты',
        price: '262 BYN',
    }, {
        namePlace: 'Новый год в Питере + Карелия',
        price: '426 BYN',
    }, {
        namePlace: 'Новый год во Львове + Карпаты',
        price: '424 BYN',
    }, {
        namePlace: 'Львов 1 ноч + Карпаты',
        price: '162 BYN',
    },

]

let basketElement = document.querySelector('.basket');


let tourName;
let tourPrice;
let item;
let html;

function addTurLviv() {

    tourName = tours[1].namePlace;
    tourPrice = tours[1].price;
    html = '';
    html += `<div class="tourName">${tourName}</div>
<div class="tourPrice">${tourPrice}</div>
<div class="deleteTur"><button onclick="deleteTur"><span class="material-icons">delete_outline</span></button></div>`

    item = document.createElement('div');
    item.classList.add('basketType');
    item.innerHTML = html;
    basketElement.append(item)
    openBasketElement.classList.add('open_basket')


}

function deleteTur() {


}