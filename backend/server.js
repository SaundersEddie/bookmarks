require('dotenv').config();

const express = require('express');
const path = require('path');
const dbConnection = require('./database/database.js');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());

server.use(routes);

if (process.env.NODE_ENV === "production") {
    server.use("/static", express.static(path.join(__dirname, "../frontend/build/static")));
    server.get("/", (req, res) => { res.sendFile(path.join(__dirname, "../frontend/build/")); });
}

server.listen(PORT, () => console.log(`API Server Listening On Port ${PORT} `));
