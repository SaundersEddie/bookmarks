const router = require('express').Router();
const passport = require('../../passport');
const controller = require('../../controllers');

// this route is just used to get the user basic info
router.get('/user', controller.userController.getUser);

router.post('/login', controller.userController.auth, passport.authenticate('local'), controller.userController.authenticate);
router.post('/logout', controller.userController.logout);
router.post('/register', controller.userController.register);

module.exports = router;
