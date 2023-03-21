const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs')

//assigning variable to use express
const app = express()

require('dotenv').config()

//assigning Port from env file
const PORT = process.env.PORT

//middleware
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


//testing server
const server = () => {
    db()
    app.listen(PORT, () =>{
        console.log('You are listening to port', PORT)
    })
}

server()

//Add new feature