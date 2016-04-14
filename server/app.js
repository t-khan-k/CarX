'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const db = require('./db');
const routes = require('./routes');
const PORT = 7070;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


config.init().then(()=>{
    db.init().then(()=>{
        app.listen(PORT, ()=>{
            routes.init(app);
            console.log(`Listening at port ${PORT}!`);
        });
    });
});

