const express = require('express')
const path = require('path')

const server = express()

// MIDDLEWARE
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// ROUTES

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server