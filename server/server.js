const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Inventory Management Backend is running');
});
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
const logRoutes = require('./routes/logRoutes');
app.use('/api/logs', logRoutes);
