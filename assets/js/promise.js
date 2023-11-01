const todos = [
    {title: "title1",description : "test1"},
    {title: "title2",description : "test2"},
    {title: "title3",description : "test3"}
]


const toDoEl = document.getElementById("todoList")

function todoList() {
    setTimeout(()=>{
       let todoItem = ""
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
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            todos.push(todo)
            const e =true
            if (!e) {
                resolve("her sey duzdur")
            }
            else{
                reject("xeta bas verdi")
            }
            callback()
        }, 2000);
    })

}


newTodo({title: "title4",description : "test4"},todoList).then(resolve =>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
})
// todoList()



const p1 = Promise.resolve("P1")
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("P2")
    }, 2000);
})

//Get sorgu
const p3 = fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data =>{
    console.log(data);
    return data
})


Promise.all([p1,p2,p3]).then((promises)=>{
    console.log("promises",promises);
})

