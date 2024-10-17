const Profile = require('../models/profileModel');
const createProfile = (req, res) => {
    const { bio, location } = req.body;
    Profile.create({ user_id: req.user.id, bio, location }, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Profile created successfully' });
    });
};
const getProfile = (req, res) => {
    Profile.findByUserId(req.user.id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
};
module.exports = { createProfile, getProfile };
