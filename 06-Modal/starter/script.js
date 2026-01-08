'use strict';
// TEST
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay');
const show = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');

console.log(show);

for (let i = 0; i < show.length; i++) {
    console.log(show[i].textContent);
}