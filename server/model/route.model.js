'use strict';

var mongoose = require('mongoose');
var epoch = require('../helper/epoch');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var RouteSchema = new Schema({
    description: {type: String},
    originToDestTime: {type: Number},
    destToOriginTime: {type: Number},
    days: [{type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}],
    owner: {type: ObjectId, ref: 'user', required: true},
    origin: {lat: Number, lng: Number, required: true},
    destination: {lat: Number, lng: Number, required: true},
    waypoints: [{lat: Number, lng: Number}],
    passengers: [{type: ObjectId, ref: 'user'}],
    requests: [{type: ObjectId, ref: 'user'}],
    comments: [{owner: {type: ObjectId, ref: 'user'}, text: String, created: {type: Number, default: epoch.ms()}}],
    active: {type: Boolean},
    deleted: {type: Boolean},
    twoway: {type: Boolean, required: true},
    city: {type: String, required: true},       // Make it enum
    country: {type: String, required: true},    // Make it enum
    created: {type: Number, default: epoch.ms()}
});

// Pre-save hook
RouteSchema.pre('save', (next)=>{
    next();
});

RouteSchema.methods.say = function() {
    console.log("bla");
};

var Route = mongoose.model('welcome',RouteSchema);
module.exports = Route;
