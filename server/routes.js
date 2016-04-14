'use strict';

var welcome = require('./controller/welcome.ctrl.js');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

function init(app){
    app.get('/', welcome.all);

    // Image upload
    // app.post('/path', auth.authenticate, upload.single('image'), welcome.create);
    console.log("Routes initiated");
}

module.exports.init = init;
