'use strict';

const mongoose = require('mongoose');
const Candidate = mongoose.model('Candidate');

exports.createCandidate = async (candidate) => {
    var savedCandidate = await new Candidate(candidate).save();
    return savedCandidate;
}