/**
 * @param {String} titolo
 * @param {String} data
 */
class Todo {
    constructor(titolo, data) {
        this.titolo = titolo;
        this.data = data;
        this.completato = false;
    }

    toString = () => {
        return `--${this.titolo} --\n Data di scadenza: ${this.data} -- Stato : ${this.completato ? 'completo' : 'incompleto'}`
    }
}
/**
 * @param  {Todo[]} todo
 */
class TodoList {
    constructor(todo) {
        this.todo = todo;
    }

    toString = () => {
        return `${this.todo.length}`
    }

    agguingereTodo = (todo) => {
        this.todo.push(todo);
    }
}

const todoList = new TodoList([]);
document.getElementById('btn').addEventListener('click', () => {
    const titolo = document.getElementById('titolo').value;
    const data = document.getElementById('data').value;
    if(titolo === '' || data === ''){
        alert('Inserire tutti i campi');
        return;
    }
    const todo = new Todo(titolo, data);
    console.log(todo.toString());
    todoList.agguingereTodo(todo);
    console.log(todoList.toString());

});

document.getElementById('btnShow').addEventListener('click', () => {
    todoList.todo.forEach((todo, index) => {
        document.getElementById('todo-collection').innerHTML+= `<div id='container-${index}'><h3>${todo.titolo}</h3><h3>${todo.data}<input type="checkbox" ${todo.completato ? 'checked' : ''}  id='${index}'/></h3><div/><br/>`;
    })
});

document.getElementById('btnDel').addEventListener('click', () => {
    todoList.todo= [];
    document.getElementById('todo-collection').innerHTML= '';
})


document.getElementById('todo-collection').addEventListener('change', (event) => {
    if(event.target.type === 'checkbox') {
        const index = event.target.id;
        todoList.todo[index].completato = event.target.checked;
        document.getElementById(`container-${index}`).style.textDecoration = event.target.checked ? 'line-through' : 'none';
        console.log(todoList.todo[index].toString());
        console.log('-------------------');   
    }
});