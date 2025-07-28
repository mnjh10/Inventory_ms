const pool = require('../models/db');
exports.getAllProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Edit product
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, category, quantity } = req.body;
    try {
        await pool.query(
            'UPDATE products SET name = $1, category = $2, quantity = $3 WHERE id = $4',
            [name, category, quantity, id]
        );
        res.json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create product
exports.createProduct = async (req, res) => {
    const { name, category, quantity } = req.body;
    try {
        await pool.query(
            'INSERT INTO products (name, category, quantity) VALUES ($1, $2, $3)',
            [name, category, quantity]
        );
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const { checkLowStock } = require('../utils/alertHelper');

// Edit product
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, category, quantity, threshold = 10 } = req.body;
    try {
        const result = await pool.query(
            'UPDATE products SET name = $1, category = $2, quantity = $3, threshold = $4 WHERE id = $5 RETURNING *',
            [name, category, quantity, threshold, id]
        );
        const updatedProduct = result.rows[0];
        checkLowStock(updatedProduct);
        res.json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create product
exports.createProduct = async (req, res) => {
    const { name, category, quantity, threshold = 10 } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO products (name, category, quantity, threshold) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, category, quantity, threshold]
        );
        const newProduct = result.rows[0];
        checkLowStock(newProduct);
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Log movement
exports.logMovement = async (productId, action, quantity) => {
    try {
        await pool.query(
            'INSERT INTO inventory_logs (product_id, action, quantity) VALUES ($1, $2, $3)',
            [productId, action, quantity]
        );
    } catch (err) {
        console.error('Failed to log inventory movement:', err.message);
    }
};