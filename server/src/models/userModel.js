const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, email: true },
    password: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true });

const UserModel = mongoose.model('UserModel', usersSchema);
module.exports = UserModel;