//AXIOS

// async function Users() {
//     const response = await axios("https://jsonplaceholder.typicode.com/users");
//     const table = document.querySelector("table");
    
//     response.data.forEach(element => {
//         const user = document.createElement('tr');
//         const userName = document.createElement('td');
//         const userUserName = document.createElement('td');
//         const userEmail = document.createElement('td');
//         const userNumber = document.createElement('td');

//         userName.textContent = element.name;    
//         userUserName.textContent = element.username;
//         userEmail.textContent = element.email;
//         userNumber.textContent = element.phone;

//         user.appendChild(userName);
//         user.appendChild(userUserName);
//         user.appendChild(userEmail);
//         user.appendChild(userNumber);
//         table.appendChild(user);
//     });
// }

// Users();





//FETCH
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
async function Users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data =await response.json()
    let tr = ""
    data.forEach(element => {
        tr+=
        `<tr>
            <td> ${element.id}</td>
            <td> ${element.name}</td>
            <td> ${element.username}</td>
            <td> ${element.email}</td>
            <td> ${element.phone}</td>
        </tr>`

    });
    tbody.innerHTML = tr
    console.log(data);
}

Users()


