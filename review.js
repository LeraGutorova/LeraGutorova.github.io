const reviewForm = [
    './assets/review-1.png',
    './assets/review-2.png',
    './assets/review-3.png',
    './assets/review-4.png',
]

currentIndex = 0;
let imageElement = document.querySelector('.image-2')
let formElement = document.querySelector('.form')


function renderForm() {
    let item = reviewForm[currentIndex]
    imageElement.src = item;

}

function prevReview() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = reviewForm.length - 1;
    }
    renderForm()
}




function nextReview() {
    currentIndex++
    if (currentIndex > reviewForm.length - 1) {
        currentIndex = 0;
    }
    renderForm()
}