const reviewForm = [
    './assets/review-1.png',
    './assets/review-2.png',
    './assets/review-3.png',
    './assets/review-4.png',
]

currentIndex = 0;
let imageElement = document.querySelector('.image')
let formElement = document.querySelector('.form')


function renderForm() {
    let item = renderForm[currentIndex]
    imageElement.src = item;

}

function prevReview() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = renderForm.length - 1;
    }
    renderForm()
}

// function renderForm() {

//     let html = '';
//     for (let image of reviewForm) {
//         html += `<img  src="${image}">`
//     }
//     formElement.innerHTML = html;
// }


function nextReview() {
    currentIndex++
    if (currentIndex > renderForm.length) {
        currentIndex = 0;
    }
    renderForm()
}