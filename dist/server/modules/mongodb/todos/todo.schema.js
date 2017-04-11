/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   22-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 31-03-2017
*/
"use strict";
var mongoose = require("mongoose");
exports.todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    isComplete: {
        type: Boolean,
        "default": false
    },
    deadline: { type: Number, "default": Date.now() },
    expire: { type: Boolean, "default": false }
});
