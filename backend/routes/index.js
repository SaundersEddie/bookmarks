const path = require('path');
const router = require('express').Router();
const testRoutes = require('./test');
const authRoutes = require('./auth');
const apiRoutes = require('./api');
// Test Routes

router.use ('/test', testRoutes);
router.use ('/auth', authRoutes);
router.use ('/api', apiRoutes);

// If no routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router
