const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isDeveloper: Boolean
});

const Developer = mongoose.model('Developers', developerSchema);
module.exports = Developer;