//API - Utiliser le fetch et les données récupérées

/*function fetchPotter(character){
    return fetch('https://hp-api.lainocs.fr/characters/' + character)
        .then((Response) => Response.json())
}

async function diplayPotter(character, potter){
    const data = await fetchPotter(character)
    document.getElementById(potter).innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.image}" alt="${data.name}"/>
    `
}

diplayPotter("harry-potter", "potter");
diplayPotter("rubeus-hagrid", "hagrid");
diplayPotter("sirius-black", "sirius");*/


//VARIABLES - Utiliser les classes, les tableaux et les objets


//Variable liste, utile pour stocker plusieurs objets dans une même varaiable et les retrouver grâce à leur place dans la liste
/*console.log('tableau/liste :')
let réponse = 'none'
let Character = ['Pierre', '20', 'viking']*/

//Boucle pour : récupère la valeur contenue dans chaque élément du tableau
/*for(let i = 0; i < 3; i++){
    réponse = Character[i]
    console.log(réponse)
}*/

//Même chose en forEach
/*Character.forEach(function(variable){
    console.log(variable)
})*/


//Variable objet, utile pour récupérer des éléments précis de la liste
/*console.log('objet :')
let Character1 = {
    name: 'Pierre',
    age: 20,
    tribe: 'viking'
}
console.log(Character1.name, Character1.age, Character1.tribe)*/


//Variable classe, utile pour créer plusieurs variables utilisant des paramètres et fonctions communes
/*console.log('classes :')
class Character2 {
    constructor(name, age, tribe) {
        this.name = name;
        this.age = age;
        this.tribe = tribe;
    }
    getName (){
        console.log(this.name);
    }
    getAge (){
        console.log(this.age);
    }
    getTribe (){
        console.log(this.tribe);
    }
}

let Pierre = new Character2('Pierre', 20, 'viking');
Pierre.getName();
Pierre.getAge();
Pierre.getTribe();*/