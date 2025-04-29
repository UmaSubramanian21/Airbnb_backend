const express = require('express');
const { handlePayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/api', handlePayment);

module.exports = router;
