const title = document.getElementById('titulo');
const firstParagraph = document.querySelector('.texto');
const allParagraph = document.querySelectorAll('.texto');
const btnClick = document.getElementById('btn');
const btnGreet = document.getElementById('saludar');
const formContent = document.getElementById('resultado');
const inputType = document.getElementById('nombre');



console.log(title, firstParagraph, allParagraph);

title.textContent = 'Nuevo texto'
allParagraph[allParagraph.length - 1].textContent = 'Ultimo p cambiado';


// Porque TextContent es mas seguro que InnerHTML?

title.style.color = '#f222';
firstParagraph.classList.add('marked');

allParagraph[allParagraph.length - 1].classList.toggle('marked')


btnClick.classList.add('enable')


btnClick.addEventListener('click', () => {
    btnClick.textContent =
        btnClick.classList.contains('disable') ? 'Enable' : 'Disable';
    btnToggle();
    createParagraph();
});

const btnToggle = () => {

    const isDisabled = btnClick.classList.contains('disable');

    btnClick.classList.toggle('enable', isDisabled);
    btnClick.classList.toggle('disable', !isDisabled);

}

const createParagraph = () => {
    const element = document.createElement('p');
    element.textContent = 'Nuevo Elemento creado';
    document.body.appendChild(element);
    element.classList.add('disable', 'styles')
}



const list = document.createElement('ul');
document.body.appendChild(list);

const createListItem = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}

btnGreet.addEventListener('click', () => {
    const data = inputType.value.trim();
    if (!data) {
        return;
    }
    const li = createListItem(data);
    list.appendChild(li);

    formContent.textContent = 'Elemento agregado correctamente';
})
