const baseUrl = "http://localhost:3000/posts"
const tadaTable = document.getElementById("data-table");
let editPostId = null


async function fetchData() {
    try {
        const response =await axios.get(baseUrl)
        addTable(response.data)
    } catch (error) {
        console.log(error);
    }
}

function addTable(data) {
    tadaTable.innerHTML = ""
    data.forEach(element => {
        const tr =document.createElement("tr")
        tr.innerHTML = 
        `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.title}</td>
        <td>
            <button onclick="editPost(${element.id})">Edit</button>
            <button onclick="deletePost(${element.id})">Delete</button>
        </td>
        `      
        tadaTable.appendChild(tr)
    });
}



async function createPost() {
    const nameInput = document.getElementById("nameInput").value
    const titleInput = document.getElementById("titleInput").value

    try {
        await axios.post(baseUrl,{
            name : nameInput,
            title : titleInput,
        })


        fetchData();


    } catch (error) {
        console.log(error);
    }
    document.getElementById("nameInput").value = "";
    document.getElementById("titleInput").value = "";
    
}




async function deletePost(postId) {
    try {
        await axios.delete(`${baseUrl}/${postId}`)
        fetchData()
    } catch (error) {
        console.log(error);
    }
}

async function editPost(postId) {
    try {
        const response = await axios(`${baseUrl}/${postId}`)
        const post = response.data
        document.getElementById("nameInput").value = nameInput= post.name
        document.getElementById("titleInput").value = titleInput= post.title

        editPostId = post.id
    } catch (error) {
        console.log(error);
    }
}


async function updatePost() {
    const nameInput = document.getElementById("nameInput").value
    const titleInput = document.getElementById("titleInput").value
    console.log("dcj");
    if (editPostId) {
        try {
            await axios.put(`${baseUrl}/${editPostId}`,{
                name : nameInput,
                title : titleInput
            })
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }
}

fetchData()

