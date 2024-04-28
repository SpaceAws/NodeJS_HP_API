import express from 'express'
import { sayHello, sayHelloInFrench } from '../controllers/HelloController.js'

const router = express.Router()

router.get('/', sayHello)
router.get('/fr', sayHelloInFrench)

export default router