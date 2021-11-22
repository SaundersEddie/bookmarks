const express = require('express');
const router = express.Router();
const controller = require('../../controllers');

// this route is just used to get the user basic info
router.get('/test', controller.testController.testCall);

module.exports = router;