const mongoose = require('mongoose');
let isConnected = false;
const connectDB = async () => {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('MongoDB connected');
    } catch {
        console.error(`Failed to connect to MongoDB`);
        process.exit(1);
    }
    return;
};

module.exports = connectDB;