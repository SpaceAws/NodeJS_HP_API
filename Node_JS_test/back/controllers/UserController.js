import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getProfile = (req, res) => {
    const token = req.headers['x-access-token']

    if(!token) {
        return res.status(401).json({ error: 'No token provided'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error){
            return res.status(401).json({ error: 'Unauthorized'})
        }

        prisma.user
            .findUnique({
                where: {
                    id: decoded.id,
                },
                include: {
                    agent: true,
                },
            })
            .then((user) => {
                res.json(user)
            })
            .catch((error) => {
                res.json(error)
            })
    })
}

const favorite = (req, res) => {
    const token = req.headers['x-access-token']

    if(!token) {
        return res.status(401).json({ error: 'No token provided'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error){
            return res.status(401).json({ error: 'Unauthorized'})
        }
    })

    prisma.user
        .update({
            where: {
                id: decoded.id,
            },
            data: {
                agentId: Number(req.body.agent),
            },
        })
        .then((user) => {
            res.json(user)
        })
        .catch((error) => {
            res.json(error)
        })
}

export {
    getProfile,
    favorite,
}