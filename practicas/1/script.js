const title = document.getElementById('titulo');
const firstParagraph = document.querySelector('.texto');
const allParagraph = document.querySelectorAll('.texto');
const btnClick = document.getElementById('btn');

console.log(title, firstParagraph, allParagraph);

title.textContent = 'Nuevo texto'
allParagraph[allParagraph.length - 1].textContent = 'Ultimo p cambiado';


// Porque TextContent es mas seguro que InnerHTML?

title.style.color = '#f222';
firstParagraph.classList.add('marked');

allParagraph[allParagraph.length - 1].classList.toggle('marked')


btnClick.classList.toggle('enable')


btnClick.addEventListener('mouseenter', (event) => {
    event.currentTarget.classList.replace('enable', 'disable')
});
btnClick.addEventListener('mouseleave', (event) => {
    event.currentTarget.classList.replace('disable', 'enable')
});

btnClick.addEventListener('click', () => {
    btnClick.textContent = 'Changed'
    if (btnClick.classList.contains('disable')) {
        btnClick.classList.replace('disable', 'enable')
    } else {
        btnClick.classList.replace('enable', 'disable')
    }

    const newElement = document.createElement('p');
    newElement.textContent = 'Nuevo Elemento creado';
    document.body.appendChild(newElement);
    newElement.classList.add('disable', 'styles')
});


