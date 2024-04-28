let token = localStorage.getItem('token')

if (!token) {
    window.location.href = 'login.html'
}

fetch('http://localhost:3000/agents')
    .then((response) => response.json)
    .then((data) => {
        let select = document.querySelector('select')
        data.forEach((agent) => {
            select.innerHTML += `
            <option value="${agent.id}">${agent.name}</option>
            `
        })
    })

const favoriteAgent = async() => {
    let agent = document.querySelector('select').value
    let response = await fetch('http://localhost:3000/user/favorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${token}`,
        },
        body: JSON.stringify({ agent: agent }),
    })
    window.location.href = 'profil.html'
}

fetch('http://localhost:3000/user', {
    headers: {
        'x-access-token': `${token}`
    },
})
    .then((response) => response.json())
    .then((data) => {
        let user = document.querySelector('#user')
        user.innerHTML = `
        <h1>${data.pseudo}</h1>
        <h2>${data.email}</h2>
        <p>${data.agent?.name ?? "pas d'agent favori"}</p>
        <a href="index.html">Back</a>
        `
    })