const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const authMiddleware = require('../middlewares/authMiddleware');

// Only admins should view logs (you can adjust this later)
router.get('/', authMiddleware, logController.getInventoryLogs);

module.exports = router;
