const express = require('express');
const { logon, hello } = require('../controllers');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/logon', logon);
router.get('/hello', protect, hello);

module.exports = router;
