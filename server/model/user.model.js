'use strict';


var mongoose = require('mongoose');
var epoch = require('../helper/epoch');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var WelcomeSchema = new Schema({
    user: {type: ObjectId, ref: 'User'},
    image: String,
    epoch: { type: Number, default: epoch.ms() }
});

// Pre-save hook
WelcomeSchema.pre('save', (next)=>{
    next();
});

WelcomeSchema.methods.say = function() {
    console.log("bla");
};

var Welcome = mongoose.model('welcome',WelcomeSchema);
module.exports = Welcome;
