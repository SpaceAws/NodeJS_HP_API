function fetchPotter(character) {       //Fait fonctionner l'API HP et permet d'accéeder aux informations que l'on cherche
    return fetch('https://hp-api.lainocs.fr/characters/' + character)
        .then((Response) => Response.json())
}
    
async function showPotter(character, hp_img_id, hp_name_id){        //Fonction qui permet d'afficher les noms et images des personnages entrés dans la base de données
    const data = await fetchPotter(character)
    document.getElementById(hp_img_id).src = data.image
    document.getElementById(hp_name_id).innerHTML = data.name

}

fetch('http://localhost:3000/')         //Va chercher dans notre base de données les personnages que l'on a séléctionnés comme favoris pour modifier le html en fonction
	.then((response) => response.json())
	.then((data) => {
		console.log(data)
		let favorites = document.querySelector('#favorites')
		data.forEach((favorite) => {
			favorites.innerHTML += `
            <a href="favoris.html?id=${favorite.id}" class="flex_container1">
                <img id="hp_img${favorite.id}" src="" alt="image" height="150px">
                <h2 id="hp_name${favorite.id}" class="padding_top"></h2>
            </a>
            `
            showPotter(favorite.name, 'hp_img'+favorite.id, 'hp_name'+favorite.id)      //lien entre l'API et la base de données
		})
	})

let listShown = false

function showList(){        //Fonction pour afficher la liste des personnage disponibles pour les favoris et la façon de les entrer dans l'input lorsqu'on clique sur un bouton
    if(!listShown){
        document.getElementById('list').className = "unactive"
        listShown = true
    } else {
        document.getElementById('list').className = "active"
        listShown = false
    }

}
    

const sendFavorite = async() => {           //S'active lorsqu'on clique sur le bouton pour ajouter un favori
    let favorite = document.querySelector('input[name="favorite"]').value

    let response = await fetch('http://localhost:3000/', {      //Envoie dans la base de donnée les informations entrées
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: favorite}),
    })
    window.location.href = "favorite.html"
}