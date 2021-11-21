const express = require('express');
const router = express.Router();
const testController = require('../../controllers/testController');

// this route is just used to get the user basic info
router.get('/test', testController.testCall);

module.exports = router;