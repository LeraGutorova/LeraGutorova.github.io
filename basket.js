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

]

let freeDateElement = document.querySelector('.option-2')
let basketElement = document.querySelector('.basket');
let basket2Element = document.querySelector('.basket-2');
let sumElement = document.querySelector('.sum-span')



const bucketItems = [];
let sum = 0;


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
    freeDateElement.innerHTML = html;
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
    basket2Element.innerHTML = html;
    // renderSum()

}

function removeFromBucket(productId) {
    bucketItems.splice(productId, 1);
    let number = parseInt(bucketItems[productId].price)
    if (number == 262) {
        sum -= 262
    }
    sum -= 237

    sumElement.innerHTML = sum
    renderBucket()


}

// function renderSum() {
//     for (let i = 0; i < bucketItemsength; i++) {
//         let productPrice = bucketItems[i].price;
//         sum += parseInt(productPrice);
//     }
//     sumElement.innerHTML = sum

// }
let productPrice = ''

function addToBucket(productId) {
    const product = products.find(item => item.id === productId);
    bucketItems.push(product);
    renderBucket()
    productPrice = bucketItems[productId - 1].price;
    sum += parseInt(productPrice);

    sumElement.innerHTML = sum

    // alert("Тур добавлен в корзину")
}