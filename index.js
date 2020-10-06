const express = require('express')
const helmet = require('helmet') //provides simple security defaults
const server = express()

const db = require('./database/connection')

server.use(helmet())

server.get('/', (req, res) => {
    res.status(200).json({hello: 'and welcome'})
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`API running on port ${PORT}`))