const express = require('express')
const basicAuth = require('express-basic-auth')
const methodOverride = require('method-override')
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

/*<-------Edit & Delete Auth Request-------->*/ 

app.use('/blog/:slug/edit' ,basicAuth({
    authorizer: myAuthorizer,
    challenge: true
}));

app.use('/blog/:slug/delete' ,basicAuth({
    authorizer: myAuthorizer,
    challenge: true
}));

function myAuthorizer(username, password) {
    const userMatches = basicAuth.safeCompare(username, process.env.AUTH_USER)
    const passwordMatches = basicAuth.safeCompare(password, process.env.AUTH_PASSWORD)
    return userMatches & passwordMatches
}

/*<--------------END------------------------>*/ 

app.use(webRoutes) 
app.use(methodOverride('?_method', {
    methods: ["POST", "GET"]
}))


var myDB = 'mongodb://localhost:27017/portfolio'

mongoose.connect(process.env.MONGODB_URI , function(){
        useUnifiedTopology: true
        useNewUrlParser: true

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