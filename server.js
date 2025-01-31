const express = require('express');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
