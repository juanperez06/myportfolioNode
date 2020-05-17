const express = require('express')
const app = express()
const webRoutes = require('./server/routes/web.js')
const pug = require('pug')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
/*<-------MongoDB connections-------->*/ 
const mongoose = require('mongoose')
const {MongoClient} = require('mongodb');
/*<---------------------------------->*/ 

const http = require('http')
const server = http.Server(app)

require('dotenv').config()

app.use(express.static('client/public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './client/src/views'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(webRoutes)

var myDB = 'mongodb://localhost:27017/portfolio'

mongoose.connect(myDB, function(){
    if(mongoose.connection.readyState == 1){
        console.log('Connected to mongoDB');
        console.log('on ' + myDB);
    } else {
        console.log('Problems connecting to mongoDB mongoose connection state is ' + mongoose.connection.readyState);
    }
})



server.listen(port, () => {
    console.log('Server is running on http://localhost:3000/ press crlt + c to stop server');
})