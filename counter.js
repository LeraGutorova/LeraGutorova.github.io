let time = 0;
let time1 = 0;
let time2 = 0;
let time3 = 0;
let time4 = 0;
let animationText = document.querySelector('.container-2');
animationText.addEventListener('mousemove', counter);
let textElement = document.querySelector('.text-description');
let digital = document.querySelectorAll('.digit');
let startInterval
let startInterval1
let startInterval2
let startInterval3
let startInterval4


function counter() {
    startInterval = setInterval(() => startCounter(), 100)
    startInterval1 = setInterval(() => startCounter1(), 10)
    startInterval2 = setInterval(() => startCounter2(), 1)
    startInterval3 = setInterval(() => startCounter3(), 1)
    startInterval4 = setInterval(() => startCounter4(), 1)

    // let stopInterval = setTimeout(() => stopCounter(), 3000)
}

function startCounter4() {
    if (time4 <= 14999) {
        time4++
        stopCounter

    }
    digital[4].innerHTML = '+ ' + time4;
}

function startCounter3() {
    if (time3 <= 4999) {
        time3++
        stopCounter

    }
    digital[3].innerHTML = '+ ' + time3;
}

function startCounter2() {
    if (time2 <= 2999) {
        time2++
        stopCounter
    }
    digital[2].innerHTML = '+ ' + time2;

}

function startCounter1() {
    if (time1 <= 799) {
        time1++
        stopCounter
    }
    digital[1].innerHTML = '+ ' + time1;
}

function startCounter() {

    if (time <= 4) {
        time++
        stopCounter
    }
    digital[0].innerHTML = '+ ' + time;
}



function stopCounter() {
    clearInterval(startInterval);
}