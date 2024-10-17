const db = require('../config/dbConfig');
const User = {
    create: (data, callback) => db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [data.username, data.email, data.password], callback),
    findByEmail: (email, callback) => db.query('SELECT * FROM users WHERE email = ?', [email], callback),
};
module.exports = User;
