let confirmDialogElement = document.getElementById('confirmDialog');
let closeButtonElement = document.getElementById('close-button');
let closeButton_2Element = document.querySelector('.send-button')
closeButtonElement.addEventListener('click', closeDialog);
closeButton_2Element.addEventListener('click', closeDialog);



let confirmDialogTimeout = setTimeout(openDialog, 8000)



function openDialog() {
    confirmDialogElement.classList.add('show')
}


function closeDialog() {
    confirmDialogElement.classList.remove('show')
}