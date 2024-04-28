import express from 'express'
import { favorite, getProfile } from '../controllers/UserController.js'

const router = express.Router()

router.get('/', getProfile)
router.get('/:id', favorite)

export default router