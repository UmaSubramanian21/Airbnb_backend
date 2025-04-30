const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
});

const createOrder = async (amount) => {
    const options = {
        amount: amount * 100,
        currency: 'INR',
        receipt: crypto.randomBytes(10).toString('hex')
    };
    return await razorpayInstance.orders.create(options);
};

module.exports = { createOrder };