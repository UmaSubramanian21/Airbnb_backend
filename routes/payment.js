// require('dotenv').config();
// const express = require('express');
// const router = express.Router();
// const Razorpay = require('razorpay');

// const razorpay = new Razorpay({
//   // key_id: process.env.RAZORPAY_KEY_ID,
//   key_id: process.env.RAZORPAY_KEY_ID,
//   // key_secret: process.env.RAZORPAY_SECRET 
//   key_secret: process.env.RAZORPAY_SECRET
// });

// router.post('/api', async (req, res) => {
//   const { amount } = req.body;

//   try {
//     console.log("Creating Razorpay order with amount:", amount); // Debugging line
//     const order = await razorpay.orders.create({
//       amount: amount * 100,
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`
//     });

//     console.log("Order created successfully:", order); // Debugging line
//     res.json(order);
//   } catch (err) {
//     console.error("Error creating Razorpay order:", err); // Log detailed error
//     res.status(500).json({ message: "Failed to create Razorpay order" ,error:err});
//   }
// });

// module.exports = router;

const express = require('express');
const { handlePayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/api', handlePayment);

module.exports = router;
