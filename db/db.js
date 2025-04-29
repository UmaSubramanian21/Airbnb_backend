const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully");
    } catch (err) {
        console.error("DB not connected", err);
    }
};

module.exports = connectDB;
