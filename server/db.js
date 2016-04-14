'use strict';

const mongoose = require('mongoose');

function init(){
    let db = mongoose;
    let config = require('./config').config();

    db.connect(url(config));

    return new Promise((resolve, reject)=>{
        db.connection.once('open', ()=>{
            console.log("DB connected");
            resolve(true);
        });

        db.connection.on('error', (err)=>{
            console.log("DB connection error");
            reject(err);
        });
    });
}

function url(config){
    return 'mongodb://' + config.hostname + '/' + config.db;
}

module.exports.init = init;
