async function fetchData() {
    const response =await axios("https://jsonplaceholder.typicode.com/posts")
    // const data =await response.json()
    console.log(response.data);
}

fetchData()


