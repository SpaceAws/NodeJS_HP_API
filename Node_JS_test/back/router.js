import express from 'express'
import agents from './routes/AgentRoutes.js'
import hello from './routes/HelloRoutes.js'
import log from './routes/AuthRoutes.js'
import user from './routes/UserRoutes.js'

const router = express.Router()

router.use('/', hello)
router.use('/agents', agents)
router.use('/signup', log)
router.use('/user', user)

export default router