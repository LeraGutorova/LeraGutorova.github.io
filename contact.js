let uaAddressElement = document.querySelector('.ua-address')
let buttonUAElement = document.querySelector('.button-ua')
let polAddress = document.querySelector('.pol-address')
let contentElement = document.querySelector('.content-dop')

function openInfoUA() {
    uaAddressElement.classList.toggle('ua-address-open')
    buttonUAElement.classList.toggle('button-ua-down')

}

function openInfoPol() {
    polAddress.classList.toggle('pol-address-open')
    contentElement.classList.toggle('open-content-1')

}