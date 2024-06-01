// models/User.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    admin1: {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    }
});

module.exports = mongoose.model('Admin', adminSchema);
