import express from 'express'
import cors from 'cors'
import router from './router.js'    //importation du router
import bodyParser from 'body-parser'

const app = express()

//Active les outils qui permettent de faire fontionner le serveur
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(router)

app.listen(3000, () => {      //Fais tourner le serveur sur le port 3000
  console.log('Server is running on port 3000')
})