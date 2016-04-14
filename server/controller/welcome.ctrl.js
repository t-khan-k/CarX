'use strict';

exports.all = all;

var db = require('mongoose');
var Welcome = require('../model/welcome.model');
var response = require('../helper/response');

function all(req, res) {
    let welcome = new Welcome();
    welcome.say();
    var successObj = new response.Success(200, "", {});
    res.status(200).send(successObj);
}
