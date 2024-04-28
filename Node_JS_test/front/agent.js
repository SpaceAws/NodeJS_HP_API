let url = window.location.search
let id = new URLSearchParams(url).get('id')

fetch(`http://localhost:3000/agents/${id}`)
	.then((response) => response.json())
	.then((data) => {
		let agent = document.querySelector('#agent')
        agent.innerHTML = `
        <small>${data.id}</small>
        <h1>${data.name}</h1>
        <a href="index.html">Back</a>
        <a href="rename.html?id=${data.id}">Rename</a>
        <button onclick="deleteAgent()">Delete</button>
        `
	})

const updateAgent = async () => {
    let agent = document.querySelector('input[name="agent"]').value
    let response = await fetch(`http://localhost:3000/agents/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: agent}),
    })
    window.location.href = 'index.html'
}

const deleteAgent = async() => {
    let response = await fetch(`http://localhost:3000/agents/${id}`, {
        method: 'DELETE',
    })
    window.location.href = 'index.html'
}