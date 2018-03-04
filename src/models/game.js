'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    stages: {
        type: Number,
        required: true,
        get: v => Math.round(v),
        set: v => Math.round(v)
    },
    competences: [{
        type: String,
        required: true
    }],
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Game', schema);