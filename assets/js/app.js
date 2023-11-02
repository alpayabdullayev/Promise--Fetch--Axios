const baseUrl = "https://northwind.vercel.app/api/categories";
const tadaTable = document.getElementById("data-table");

async function fetchData() {
    try {
        const response = await axios.get(baseUrl);
        addTable(response.data);
    } catch (error) {
        console.log(error);
    }    
}

function addTable(data) {
    tadaTable.innerHTML = ""; 
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = 
        `
        <td>${item.id}</td>
        <td>${item.description}</td>
        <td>${item.name}</td>
        <td>
            <button onclick="editPost(${item.id})">Edit</button>
            <button onclick="deletePost(${item.id})">Delete</button>
        </td>
        `;
        tadaTable.appendChild(row);
    });
}

async function createPost() {
    const descriptionInput = document.getElementById('descriptionInput').value;
    const nameInput = document.getElementById('nameInput').value;

    try {
        await axios.post(baseUrl, {
            description: descriptionInput,
            name: nameInput
        });
        fetchData();
    } catch (error) {
        console.log(error);
    }
}


async function deletePost(postId) {
    try {
        
        await axios.delete(`${baseUrl}/${postId}`)
        fetchData()
    } catch (error) {
        console.log(error);
    }
}

let editPostId = null


async function editPost(postId) {


    
    try {
        const response =await axios.get(`${baseUrl}/${postId}`)
        const post =response.data
         document.getElementById("descriptionInput").value=descriptionInput= post.description
        document.getElementById("nameInput").value=nameInput =post.name
        

        editPostId = post.id
    } catch (error) {
        console.log(error);
    }
}



async function updatePost() {
    const descriptionInput = document.getElementById("descriptionInput").value
    const nameInput = document.getElementById("descriptionInput").value

    if (editPostId) {
        try {
            await axios.put(`${baseUrl}/${editPostId}`,{
                description: descriptionInput,
                name :nameInput
            })
            fetchData()
        } catch (error) {
            
        }
    }
}
fetchData();
