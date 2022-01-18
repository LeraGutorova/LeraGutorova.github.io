let products = [{
        id: 1,
        namePlace: 'Львов 2 ночи + Карпаты',
        date: '24.01-28.01',
        price: '262BYN',
        sumPlace: '32',

    },
    {
        id: 2,
        namePlace: 'Львов 2 ночи + Карпаты',
        date: '12.02-16.02',
        price: '237BYN',
        sumPlace: '35',
    },
    {
        id: 3,
        namePlace: 'Львов 1 ноч + Карпаты',
        date: '26.01-30.01',
        price: '170BYN',
        sumPlace: '24',
    },
    {
        id: 4,
        namePlace: 'Киев + Чернобыль',
        date: '02.01-07.01',
        price: '300BYN',
        sumPlace: '29',
    },
]

let TurElement = document.querySelector('.option-container')
let basketElement = document.querySelector('.basket');
let basket2Element = document.querySelector('.basket-2');
let sumElement = document.querySelector('.sum-span')
let modalElement = document.querySelector('.modal')



let KEY_BASKET = 'bucketItems'
let KEY_SUM = 'sum'




const bucketItems = localStorage.getItem(KEY_BASKET) || [];
let sum = localStorage.getItem(KEY_SUM) || 0;


renderProducts()


function renderProducts() {
    let html = '';
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        html += `
<div class="option">
<div class="tur">${product.namePlace}</div>
<div class="date">${product.date}</div>
<div class="price">${product.price}</div>
<div class="num-place">${product.sumPlace}</div>
<div class="add"><button onclick="addToBucket(${product.id})" class="add-tur">Оставить заявку</button></div>
</div>`
    }
    TurElement.innerHTML = html;
}

function openBasket() {
    basketElement.classList.toggle('open_basket')

}



function renderBucket() {
    let html = '';
    for (let i = 0; i < bucketItems.length; i++) {
        const product = bucketItems[i];
        html += `
<div class="basketType">
    <div class="tourName">${product.namePlace}</div>
    <div class="tourDate">${product.date}</div>
    <div class="tourPrice">${product.price}</div>
    <div class="deleteTur"><button onclick="removeFromBucket(${i})"><span class="material-icons">delete_outline</span></button></div>
 </div>`

    }
    localStorage.setItem('KEY_BASKET', bucketItems)
    renderSum()

    basket2Element.innerHTML = html;


}

function removeFromBucket(productId) {
    bucketItems.splice(productId, 1);

    // let number = parseInt(bucketItems[productId].price)

    // if (number == 262) {
    //     sum -= 262
    // }
    // sum -= 237

    // sumElement.innerHTML = sum
    renderBucket()


}

function renderSum() {
    for (let i = 0; i < bucketItems.length; i++) {
        let productPrice = bucketItems[i].price;
        sum += parseInt(productPrice);
    }
    sumElement.innerHTML = sum
    localStorage.setItem(KEY_SUM, sum)

}
let productPrice = ''
let modalTimeout
let close

function addToBucket(productId) {
    const product = products.find(item => item.id === productId);
    bucketItems.push(product);

    renderBucket()
    modalTimeout = setTimeout(openModal, 0)

}

function openModal() {
    modalElement.classList.add('show-modal')
    close = setTimeout(closeModal, 1000);

}

function closeModal() {
    modalElement.classList.remove('show-modal')
}