const sendAgent = async() => {
    let agent = document.querySelector('input[name="agent"]').value

    let response = await fetch('http://localhost:3000/agents', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: agent}),
    })
    window.location.href = "index.html"
}

fetch('http://localhost:3000/agents')
	.then((response) => response.json())
	.then((data) => {
		console.log(data)
		let agents = document.querySelector('#agents')
		data.forEach((agent) => {
			agents.innerHTML += `
            <a href="agent.html?id=${agent.id}">
                <h2>${agent.name}</h2>
            </a>
            `
		})
	})