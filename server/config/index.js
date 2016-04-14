'use strict';

var cloudinary = require('cloudinary');
var process = require('process');

var envs = {
    dev: {
        env: 'dev',
        db: 'carx_db',
        hostname: 'localhost',
        cloudinary: {
            cloudName: 'carx',
            apiKey: '395845624313527',
            apiSecret: 'rP5FRFCwOiSgEherG_JmsTjuNDw'
        },
        secret: 'blaa123'
    },
    prod: {
        env: 'dev',
        db: 'carx_db',
        hostname: 'localhost'
    }
};

function init(){
    return new Promise((resolve)=>{
        var _env = env();
        console.log('Initializing '+_env+' environment');
        let _config = envs[_env];
        cloudinary.config({
            cloud_name: _config.cloudinary.cloudName,
            api_key: _config.cloudinary.apiKey,
            api_secret: _config.cloudinary.apiSecret
        });
        resolve();
    });
}

function config(){
    return envs[env()];
}

function env(){
    return process.argv[2] || 'dev';
}

module.exports.init = init;
module.exports.config = config;
