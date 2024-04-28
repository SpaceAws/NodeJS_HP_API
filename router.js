import express from 'express'
import favorites from './routes/favoriteRoutes.js'  //importation des routes

const router = express.Router()

router.use('/', favorites)      //activation du router pour les fontions de la favoriteRoutes en fonction de l'url

export default router       //exportation du router pour l'index