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

let loadedToDos = defaultToDos.slice(0, defaultToDos.length);

const filterConditions = {
    searchText: '',
    removeCompleted: false
}
const sortConditions = {
    activeSort: 'no-sort'
}

function renderToDos(todos) {
    let filteredToDos = filterToDos(todos);
    let sortedToDos = sortToDos(filteredToDos, sortConditions.activeSort);
    let list = document.getElementById('todos');
    list.innerHTML = '';
    sortedToDos.forEach(todo => {
        let el = document.createElement('li');
        el.textContent = todo.text;
        el.style.color = todo.completed ? 'rgb(50,200,50)' : 'black';
        el.style.textDecoration = todo.completed ? 'line-through' : null;
        list.appendChild(el);
    });
}

function filterToDos(todos) {
    let todosToFilter = todos.slice(0, todos.length);
    toDosFilteredBySearch = filterConditions.searchText ? todosToFilter.filter(todo => todo.text.includes(filterConditions.searchText)) : todosToFilter;
    toDosFilteredByCompletion = filterConditions.removeCompleted ? toDosFilteredBySearch.filter(todo => !todo.completed) : toDosFilteredBySearch;
    return toDosFilteredByCompletion;
}

function sortToDos(todos, sortMethod) {
    let todosToSort = todos.slice(0, todos.length);
    switch(sortMethod) {
        case 'sort-alphabetically':
            console.log('sort-alphabetically')
            return sortToDosAlphabetically(todosToSort)
        default:
            console.log('default')
            return todosToSort;
    }
}

function sortToDosAlphabetically(todos) {

    function compareStrings(a,b) {
        let aLowered = a.toLowerCase();
        let bLowered = b.toLowerCase();
        for (let i = 0; i < (Math.min(a.length, b.length)); i++) {
            if (aLowered.charCodeAt(i) > bLowered.charCodeAt(i)) return 1;
            if (aLowered.charCodeAt(i) < bLowered.charCodeAt(i)) return -1;
        }
        if (a.length === b.length) return 0;
        return a.length < b.length ? -1 : 1;
    }

    return todos.sort((a,b) => {
        return compareStrings(a.text, b.text);
    });

}

document.querySelector('#submit-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let text = e.target.elements.note.value;
    let alreadyCompleted = e.target.elements['select-if-completed'].checked;
    if (!text) throw new ReferenceError();
    loadedToDos.push({ text: text, completed: alreadyCompleted });
    e.target.elements.note.value = '';
    e.target.elements['select-if-completed'].checked = false;
    renderToDos(loadedToDos);
});

document.querySelector('#search-todo').addEventListener('input', (e) => {
    filterConditions.searchText = e.target.value;
    filteredToDos = filterToDos(loadedToDos);
    renderToDos(filteredToDos);
});

document.querySelector('#hide-completed-checkbox').addEventListener('change', (e) => {
    filterConditions.removeCompleted = !filterConditions.removeCompleted;
    renderToDos(loadedToDos);
});

document.querySelector('#sort-dropdown').addEventListener('change', (e) => {
    sortConditions.activeSort = e.target.value;
    renderToDos(loadedToDos);
});

function displayInvalidInput(message) {
    alert(message);
    return null;
}

renderToDos(defaultToDos);