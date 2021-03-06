const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    {
        usernameField: 'userName' // not necessary, DEFAULT
    },
    function (username, password, done) {
        db.User.findOne({ userName: username }, (err, userMatch) => {
            if (err) {
                return done(err);
            }
            if (!userMatch) {
                return done(null, false, { message: 'Incorrect username' });
            }
            if (!userMatch.checkPassword(password)) {
                return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, userMatch);
        });
    }
);

module.exports = strategy;