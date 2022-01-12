const reviewForm = [
    './assets/review-1.png',
    './assets/review-2.png',
    './assets/review-3.png',
    './assets/review-4.png',
]

currentIndex = 0;

const IMAGE_WIDTH = 100;

let formElement = document.querySelector('.form')
renderForm()



function renderForm() {
    let html = '';
    for (let i = 0; i < reviewForm.length; i++) {
        let arr = reviewForm[i]
        html += `<img class="image-2" src="${arr}">`
        formElement.innerHTML = html;
    }

}


function render() {

    const offset = currentIndex * IMAGE_WIDTH;
    formElement.style.transform = `translateX(-${offset}%)`
}

function prevReview() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = reviewForm.length - 1;
    }

    render()
}


function nextReview() {
    currentIndex++
    if (currentIndex > reviewForm.length - 1) {
        currentIndex = 0;
    }

    render()
}