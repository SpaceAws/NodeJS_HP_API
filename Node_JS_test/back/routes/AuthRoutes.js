import express from 'express'
import { logIn, signUp } from '../controllers/AuthController.js'

const router = express.Router()

router.post('/', signUp)
router.post('/:id', logIn)

export default router