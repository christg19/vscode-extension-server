"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: String,
    lineCount: Number,
});
var userModel = mongoose.model('alterna', userSchema);
exports.default = userModel;
