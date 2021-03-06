const defaultToDos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercise',
        completed: true
    }
];

let loadedToDos = defaultToDos;
let filteredToDos = loadedToDos;

function renderToDos(todos) {
    let list = document.getElementById('todos');
    list.innerHTML = '';
    todos.forEach(todo => {
        let el = document.createElement('li');
        el.textContent = todo.text;
        el.style.color = todo.completed ? 'rgb(50,200,50)' : 'black';
        el.style.textDecoration = todo.completed ? 'line-through' : null;
        list.appendChild(el);
    });
}

document.querySelector('#submit-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let text = e.target.elements.note.value;
    loadedToDos.push({ text: text, completed: false });
    e.target.elements.note.value = '';
    renderToDos(filteredToDos);
});

document.querySelector('#search-todo').addEventListener('input', (e) => {
    document.querySelector('ul').innerHTML = '';
    let searchText = e.target.value;
    filteredToDos = searchText ? loadedToDos.filter(todo => todo.text.includes(searchText)) : loadedToDos;
    renderToDos(filteredToDos);
});

function displayInvalidInput(message) {
    alert(message);
    return null;
}

renderToDos(defaultToDos);