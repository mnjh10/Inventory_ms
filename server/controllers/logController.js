const pool = require('../models/db');

exports.getInventoryLogs = async (req, res) => {
    try {
        const logs = await pool.query(
            `SELECT l.id, p.name AS product_name, l.action, l.quantity, l.timestamp
       FROM inventory_logs l
       JOIN products p ON l.product_id = p.id
       ORDER BY l.timestamp DESC`
        );
        res.json(logs.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
