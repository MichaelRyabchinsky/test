export async function getData(list) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    
    for (let i = 0; i < data.length; i++) {
        list.innerHTML += `
            <div class="card">
                <h4 class="card-title">${data[i].title}</h4>
                <p>${data[i].body}</p>
            </div>
        `
    }
}