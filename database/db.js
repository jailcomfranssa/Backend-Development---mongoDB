require('dotenv').config();
const log = require("../utils/logger");
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        log.success('MongoDB connected successfully');

    }catch(error){
        log.error(' MongoDB connection error:', error);
        process.exit(1);
    }
}
module.exports = connectDB;