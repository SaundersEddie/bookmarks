// Update this file with routes as they're added

const path = require('path');
const router = require('express').Router();
const testRoutes = require('./test');
const userRoutes = require('./auth')

// Test Routes
router.use ('/test', testRoutes);
router.use ('/uapi', userRoutes);

// If no routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router
