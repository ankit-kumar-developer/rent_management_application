// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    admins: {
        type: Map,
        of: {
            username: { type: String, required: true },
            password: { type: String, required: true }
        }
    }
});

module.exports = mongoose.model('Admin', adminSchema);
