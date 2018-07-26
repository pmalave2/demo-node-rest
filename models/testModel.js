'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
    "name": String,
    "typeExercise": String,
    "mainImage": String,
    "levelDifficulty": Number,
    "createdBy": String,
    "creationDate": {
        type: Date,
        default: Date.now
    },
    "status": String,
    "timer":{
        "duration": Number
    },
    "lights":[
        {
            "colorCode": String
        }
    ],
    "music":[
        {
            "name": String,
            "sourcePath": String,
            "volumen": Number
        }
    ],
    "videoTutor":[
        {
            "name": String,
            "sourcePath": String
        }
    ]
});

module.exports = mongoose.model("Exercise", exerciseSchema);