const modal = document.querySelector('#modal');
const modalContainer = document.querySelector('.modal-container')
const navbar = document.querySelector('.navbar')
const navbarItem = document.querySelector('.navbar-item')

function showModal() {
    modal.classList.remove('modal-hidden')
    modal.classList.add('modal-show')
}

function hideModal() {
    modal.classList.remove('modal-show')
    modal.classList.add('modal-hidden')
}

modal.addEventListener('click', hideModal)

modalContainer.addEventListener('click', e => {
    e.stopPropagation();
})