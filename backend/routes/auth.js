// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const adminData = await Admin.findOne({});
    if (!adminData) {
        return res.status(400).send('Invalid username or password');
    }

    const admins = adminData.admins;
    let adminFound = false;

    admins.forEach((admin) => {
        if (admin.username === username && admin.password === password) {
            adminFound = true;
        }
    });

    if (!adminFound) {
        return res.status(400).send('Invalid username or password');
    }

    const token = jwt.sign({ username }, 'secretKey'); // Sign token with username or other identifier
    res.header('auth-token', token).send(token);
});

module.exports = router;
