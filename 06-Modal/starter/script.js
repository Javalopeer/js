'use strict';
// TEST
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay');
const show = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < show.length; i++) {
    show[i].addEventListener('click', openModal)
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ESC' && !modal.classList.contains('hidden')) {
        closeModal
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})