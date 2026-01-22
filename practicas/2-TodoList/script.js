const inputText = document.getElementById('input');
const btnAdd = document.getElementById('btn');
const paragraph = document.getElementById('message');

const list = document.createElement('ul');
document.body.appendChild(list);
list.classList.toggle('liStyles')

const createLi = (data) => {
    const li = document.createElement('li');
    li.textContent = data;
    li.classList.toggle('liStyles')
    return li;
}

btnAdd.addEventListener('click', () => {
    const text = inputText.value.trim();

    if (!text) {
        paragraph.textContent = 'Add a task.'
        return;
    }

    const newLi = createLi(text);
    list.appendChild(newLi);

    paragraph.textContent = 'Task added.'
})