import express from 'express';
import path from 'path';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';

// const dbConnection = require('./database/database.js');
// const passport = require ('./passport');
// const routes = require('./routes');
const server = express();
const PORT = process.env.PORT || 3001;

// process.env.NODE_ENV === 'production' ? MongoStore = process.env.PROD_DB : MongoStore = process.env.DEV_DB
dotenv.config();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
// server.use(
//     session({
//         secret: process.env.SECRET || "this is the default passphrase",
//         cookie: { maxAge: (10*60*1000 )},
//         store: MongoStore.create({ mongoUrl: MONGO_STORE }),
//         resave: false,
//         saveUninitialized: false,
//     })
// );

// server.use(passport.initialize());
// server.use(passport.session());

if (process.env.NODE_ENV === "production") {
    server.use("/static", express.static(path.join(__dirname, "../frontend/build/static")));
    server.get("/", (req, res) => { res.sendFile(path.join(__dirname, "../frontend/build/")); });
}

// server.use(routes);

// Error Handler
server.use(function (err, req, res, next) {
    console.log("====== ERROR =======");
    console.error(err.stack);
    res.status(500);
});

server.listen(PORT, () => console.log(`API Server Listening On Port ${PORT} `));
