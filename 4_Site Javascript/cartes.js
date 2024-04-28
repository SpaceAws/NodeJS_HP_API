/*API Harry Potter*/
function fetchPotter(character){
    return fetch('https://hp-api.lainocs.fr/characters/' + character)
        .then((Response) => Response.json())
}
    
async function diplayPotter(character, texte, image){
    const data = await fetchPotter(character)
    document.getElementById(texte).innerHTML = data.name
    document.getElementById(image).src = data.image
}
    
/*Appel de la fonction d'affichage avec trois personnages différents*/
diplayPotter("harry-potter", "text_chara1", "image_chara1");
diplayPotter("rubeus-hagrid", "text_chara2", "image_chara2");
diplayPotter("sirius-black", "text_chara3", "image_chara3");
