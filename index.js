// import neccessary packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())

// mongo db connection 
const db_connection = mongoose.connect('mongodb+srv://umasubramanian2002:C0AsiCJ3QK5h0VpX@airbnb-database.gvm4sug.mongodb.net/airbnb_database?retryWrites=true&w=majority&appName=Airbnb-Database')

//check connection 
db_connection.then((data) => { console.log("db connected sucessfully") }).catch((err) => { console.log('db not connected', err) })

//model creation
const User_model = mongoose.model("users", {
    name: String
}, "users")

User_model.find().then(function (data) {
    console.log(" model find() works perfectly", data)
}).catch(function (err) {
    console.log(" model find() doesn't works",err)
})

//sample api for test
app.get('/api', (req, res) => {
    res.send('api works sucessfully')
})

// setting port number
app.listen(7000, function () {
    console.log('Running port on 7000....')
}) 