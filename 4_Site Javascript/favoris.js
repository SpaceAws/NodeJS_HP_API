let url = window.location.search        //Accède à des infos depuis le back
let id = new URLSearchParams(url).get('id')

function fetchPotter(character) {           //Fait fonctionner l'API HP et permet d'accéeder aux informations que l'on cherche
    return fetch('https://hp-api.lainocs.fr/characters/' + character)
        .then((Response) => Response.json())
}
    
async function showPotter(character, img, name, wand, patronus, actor, house){      //Fonction qui permet d'afficher les infos du personnage sélectionné
    const data = await fetchPotter(character)
    document.getElementById(img).src = data.image
    document.getElementById(name).innerHTML = data.name
    document.getElementById(wand).innerHTML = "Baguette : "+data.wand
    document.getElementById(patronus).innerHTML = "Patronus : "+data.patronus
    document.getElementById(actor).innerHTML = "Acteur : "+data.actor
    document.getElementById(house).innerHTML = "Maison : "+data.house
    console.log(data.actor)
}

fetch(`http://localhost:3000/${id}`)        //Va chercher dans notre base de données le personnage que l'on a séléctionné pour modifier le html en fonction
	.then((response) => response.json())
	.then((data) => {
		let favorite = document.querySelector('#favorite')
        favorite.innerHTML = `
        <div class="flex_container1">
            <img id="hp_img${data.id}" src="" alt="image" height="150px">
            <h1 id="hp_name${data.id}" class="padding_top">Nom</h1>
        </div>
        <p id="hp_wand${data.id}" class="padding">Baguette</p>
        <p id="hp_patronus${data.id}" class="padding">Patronus</p>
        <p id="hp_actor${data.id}" class="padding">Acteur</p>
        <p id="hp_house${data.id}" class="padding">Maison</p>
        <div class="flex_container1">
            <a class="link" href="favorite.html">Retour</a>
            <a class="link" href="rename.html?id=${data.id}">Renommer</a>
            <a class="link" href="favorite.html" onclick="deleteFavorite()">Supprimer</a>
        </div>
        `
        showPotter(data.name, 'hp_img'+id, 'hp_name'+id, 'hp_wand'+id, 'hp_patronus'+id, 'hp_actor'+id, 'hp_house'+id)      //lien entre l'API et la base de données
	})

const updateFavorite = async () => {            //Fonction rename, qui change la valeur actuelle dans la base de données
    let favorite = document.querySelector('input[name="favorite"]').value
    let response = await fetch(`http://localhost:3000/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: favorite}),
    })
    window.location.href = 'favorite.html'
}

const deleteFavorite = async() => {             //Fonction delete qui supprime le favori séléctionné de la base de données
    let response = await fetch(`http://localhost:3000/${id}`, {
        method: 'DELETE',
    })
}