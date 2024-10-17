const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const register = async (req, res) => {
    const { username, email, password } = req.body;
    User.findByEmail(email, async (err, results) => {
        if (results.length > 0) return res.status(400).json({ message: 'User already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        User.create({ username, email, password: hashedPassword }, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
};
const login = async (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, async (err, results) => {
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });
        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
};
module.exports = { register, login };
