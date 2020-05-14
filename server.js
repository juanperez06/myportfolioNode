const express = require('express')
const app = express()
const webRoutes = require('./server/routes/web.js')
const pug = require('pug')
const path = require('path')
const port = process.env.PORT || 3000

const http = require('http')
const server = http.Server(app)

require('dotenv').config()

app.use(express.static('client/public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './client/src/views'))


app.use(webRoutes)



server.listen(port, () => {
    console.log('Server is running on http://localhost:3000/ press crlt + c to stop server');
})