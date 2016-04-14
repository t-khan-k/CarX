'use strict';

var mongoose = require('mongoose');
var epoch = require('../helper/epoch');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    token: {type: String},
    number: {type: String, required: true},
    age: {type: Number},
    gender: {type: String, enum: ['m', 'f', 'x'], required: true},      // separated out in constants file
    image: {type: String},
    routes: [{type: ObjectId, ref: 'route'}],
    organization: {type: ObjectId, ref: 'organization'},
    deleted: {type: Boolean},
    created: {type: Number, default: epoch.ms()}
});

// Pre-save hook
UserSchema.pre('save', (next)=>{
    next();
});

UserSchema.methods.say = function() {
    console.log("bla");
};

var User = mongoose.model('welcome',UserSchema);
module.exports = User;
