const db = require('../config/dbConfig');
const Profile = {
    create: (data, callback) => db.query('INSERT INTO profiles (user_id, bio, location) VALUES (?, ?, ?)', [data.user_id, data.bio, data.location], callback),
    findByUserId: (user_id, callback) => db.query('SELECT * FROM profiles WHERE user_id = ?', [user_id], callback),
};
module.exports = Profile;
