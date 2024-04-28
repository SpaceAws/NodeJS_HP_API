import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getFavorites = (req, res) => {      //Fonction qui récupère les favoris dans la BDD pour les renvoyer au front
  prisma.favorite
    .findMany()
    .then((favorites) => {
      res.json(favorites)
    })
    .catch((error) => {
      res.json(error)
    })
}

const getFavorite = (req,res) => {        //Fonction qui récupère un favori en particulier pour la page détaillée
    let id = Number(req.params.id)
    prisma.favorite
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((favorite) => {
        res.json(favorite)
      })
      .catch((error) =>{
        res.json(error)
      })
}

const createFavorite = (req,res) => {     //Fonction qui permet de créer un favori en envoyant les données dans la BDD
    let favorite = req.body
    console.log(favorite)
    prisma.favorite
        .create({
        data: {
            name: favorite.name,
        },
        })
        .then((favorite) => {
        res.json(favorite)
        })
        .catch((error) => {
        res.json(error)
        })
}

const updateFavorite = (req,res) => {       //Fonction qui permet de rennommer un favori grâce à la method PUT
    let id = Number(req.params.id)  
    let favorite = req.body
  
    prisma.favorite
      .update({
        where: {
          id: id
        },
        data: {
          name: favorite.name
        }
      })
      .then((favorite) => {
        res.json(favorite)
      })
      .catch((error) => {
        res.json(error)
      })
}

const deleteFavorite = (req,res) => {       //Fonction qui supprime le favori sélectionné
    let id = Number(req.params.id)

    prisma.favorite
      .delete({
        where: {
          id: id,
        },
      })
      .then((favorite) => {
        res.json(favorite)
      })
      .catch((error) => {
        res.json(error)
      })
}

export {        //Exportation des fonctions pour faire fonctionner les routes
    getFavorites,
    getFavorite,
    createFavorite,
    updateFavorite,
    deleteFavorite,
}