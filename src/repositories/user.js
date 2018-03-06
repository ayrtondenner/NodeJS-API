'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.createUser = async (user) => {
    var savedUser = await new User(user).save();
    return savedUser;
}