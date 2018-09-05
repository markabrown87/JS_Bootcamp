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
const filterConditions = {
    searchText: '',
    removeCompleted: false
}

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

function filterToDos(todos) {
    toDosFilteredBySearch = filterConditions.searchText ? todos.filter(todo => todo.text.includes(filterConditions.searchText)) : todos;
    toDosFilteredByCompletion = filterConditions.removeCompleted ? toDosFilteredBySearch.filter(todo => !todo.completed) : toDosFilteredBySearch;
    return toDosFilteredByCompletion;
}

document.querySelector('#submit-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let text = e.target.elements.note.value;
    let alreadyCompleted = e.target.elements['select-if-completed'].checked;
    if (!text) throw new ReferenceError();
    loadedToDos.push({ text: text, completed: alreadyCompleted });
    e.target.elements.note.value = '';
    e.target.elements['select-if-completed'].checked = false;
    renderToDos(filteredToDos);
});

document.querySelector('#search-todo').addEventListener('input', (e) => {
    filterConditions.searchText = e.target.value;
    filteredToDos = filterToDos(loadedToDos);
    renderToDos(filteredToDos);
});

document.querySelector('#hide-completed-checkbox').addEventListener('change', (e) => {
    filterConditions.removeCompleted = !filterConditions.removeCompleted;
    filteredToDos = filterToDos(loadedToDos);
    renderToDos(filteredToDos);
});

function displayInvalidInput(message) {
    alert(message);
    return null;
}

renderToDos(defaultToDos);