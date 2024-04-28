import express from 'express'
import { getFavorites, getFavorite, createFavorite, updateFavorite, deleteFavorite } from '../controllers/favoriteController.js'    //importation des fonctions du controller

const router = express.Router()

//Définition du router en fonction de l'url pour savoir quelle fonction activer et via quelle méthode
router.get('/', getFavorites)
router.get('/:id', getFavorite)
router.post('/', createFavorite)
router.put('/:id', updateFavorite)
router.delete('/:id', deleteFavorite)

export default router       //Exportation des routes pour le router