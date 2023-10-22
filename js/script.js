const quitButton = document.querySelector('.quit-button');
const formOrder = document.querySelector('.form-order');
const headButton = document.querySelector('.head-button');

function hbtn() {
    formOrder.style.display = 'block';
}

function qbtn() {
    formOrder.style.display = 'none';
}

headButton.addEventListener('click', hbtn);
quitButton.addEventListener('click', qbtn);