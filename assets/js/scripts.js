const todos = [
    {title: "title1",description : "test1"},
    {title: "title2",description : "test2"},
    {title: "title3",description : "test3"}
]


const toDoEl = document.getElementById("todoList")

function todoList() {
    setTimeout(()=>{
        todoItem = ''
        todos.forEach((item)=>{
            todoItem+=`
            <li>
                <h1>${item.title}</h1>
                <p>${item.description}</p>
            </li>`

        })
        toDoEl.innerHTML = todoItem
    },1000)
}





function newTodo(todo,callback) {
    setTimeout(() => {
        todos.push(todo)
        callback()
    }, 2000);
}


newTodo({title: "title4",description : "test4"},todoList)
// todoList()