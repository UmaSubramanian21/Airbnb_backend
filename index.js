// // import neccessary packages
// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const app = express()
// // initialize the instance from Razorpay and crypto
// const Razorpay = require('razorpay')
// const crypto = require('crypto')
// app.use(cors())
// app.use(express.json())

// // mongo db connection 
// const db_connection = mongoose.connect('mongodb+srv://umasubramanian2002:C0AsiCJ3QK5h0VpX@airbnb-database.gvm4sug.mongodb.net/airbnb_database?retryWrites=true&w=majority&appName=Airbnb-Database')

// //check connection 
// db_connection.then((data) => { console.log("db connected sucessfully") }).catch((err) => { console.log('db not connected', err) })

// //model creation
// const User_model = mongoose.model("users", {
//     name: String
// }, "users")

// User_model.find().then(function (data) {
//     console.log(" model.find() works perfectly", data)
// }).catch(function (err) {
//     console.log(" model.find() doesn't work", err)
// })

// //sample api for test
// app.get('/api', (req, res) => {
//     res.send('api works sucessfully')
// })

// // payment method api
// app.post('/payment/api', (req, res) => {

//     try {
//         const RazorpayInstance = new Razorpay({
//             key_id: 'rzp_test_8znbbFdn6mpjv8',
//             key_secret: 'AnzLEM4ZHLN8NxPUTvBwDCLd'
//         });

//         const options = {
//             amount: req.body.amount * 100,
//             currency: 'INR',
//             receipt: crypto.randomBytes(10).toString('hex')
//         };

//         RazorpayInstance.orders.create(options, (err, order) => {
//             if (err) {
//                 return res.status(500).send('Order creation failed');
//             }
//             res.status(200).json(order);
//         });
//     } catch (err) {
//         res.status(500).send("Internal server error");
//     }
// });

// // 

// const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });
// module.exports = mongoose.model('User', UserSchema);


// // setting port number
// app.listen(7000, function () {
//     console.log('Running port on 7000....')
// }) 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db');

// const paymentRoutes = require('./routes/paymentRoutes');

// Import route

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// app.use('/payment', paymentRoutes);

// Test route
app.get('/api', (req, res) => {
    res.send('API works successfully');
});

// user login details route
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`);
});
