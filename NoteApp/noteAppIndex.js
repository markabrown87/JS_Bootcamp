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

let loadedToDos;

function loadToDos(todos) {
    loadedToDos = todos;
    let list = document.getElementById('todos');
    todos.forEach(todo => {
        let el = document.createElement('li');
        el.textContent = todo.text;
        el.style.color = todo.completed ? 'rgb(50,200,50)' : 'black';
        el.style.textDecoration = todo.completed ? 'line-through' : null;
        list.appendChild(el);
    });
}

function loadSubmitButton() {
    let button = document.createElement('button');
    button.value = 'SUBMIT';
    button.textContent = 'SUBMIT';
    button.style.height = '25px';
    button.style.width = '75px';
    button.style.borderRadius = '5%';
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
    button.style.fontWeight = '900';
    button.style.display = 'block';
    button.style.marginTop = '10px';
    button.style.marginLeft = '10px';
    button.addEventListener('click', addToDo);
    document.body.appendChild(button);
}

function loadInput() {
    let input = document.createElement('input');
    input.id = 'new-todo';
    input.placeholder = 'Submit New Todo';
    input.type = 'text';
    input.style.display = 'block';
    input.style.marginLeft = '10px';
    input.style.marginTop = '10px';
    document.body.appendChild(input);
}

function loadSearch() {
    let search = document.createElement('input');
    search.id = 'search-todo';
    search.placeholder = 'Search For Todos';
    search.type = 'text';
    search.style.display = 'block';
    search.style.marginLeft = '10px';
    search.addEventListener('input', filterToDos);
    document.body.appendChild(search);
}

function addToDo(e) {
    let text = document.getElementById('new-todo').value;
    if (text === undefined || text.length === 0) {
        displayInvalidInput('TO DO MESSAGE MUST BE PROVIDED');
        return null;
    }
    let list = document.getElementById('todos');
    let el = document.createElement('li');
    let todo = { text: text, completed: false}
    el.textContent = todo.text;
    el.style.color = 'black';
    list.appendChild(el);
    document.getElementById('new-todo').value = '';
    loadedToDos.push({ text: text, completed: false});
}

function filterToDos(e) {
    let searchText = e.target.value;
    let filteredToDos = searchText ? loadedToDos.filter(todo => todo.text.includes(searchText)) : loadedToDos;

    document.querySelector('ul').innerHTML = '';

    filteredToDos.forEach(todo => {
        let el = document.createElement('li');
        el.textContent = todo.text;
        el.style.color = todo.completed ? 'rgb(50,200,50)' : 'black';
        el.style.textDecoration = todo.completed ? 'line-through' : null;
        document.querySelector('ul').appendChild(el);
    })
}

function displayInvalidInput(message) {
    alert(message);
    return null;
}

loadToDos(defaultToDos);
loadSearch();
loadInput();
loadSubmitButton();