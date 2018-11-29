'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*const schema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
})*/

const schema = new Schema({
    name: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    bornDate: {
        type: Date,
        required: true
    },

    gender: {
        type: String,
        enum: ["Masculino", "Feminino"],
        required: true
    },

    educationLevel: {
        type: String,
        enum: [
            "Analfabeto",
            "Ensino fundamental incompleto",
            "Ensino fundamental completo",
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Superior completo",
            "Pós-Graduação",
            "Mestrado",
            "Doutorado",
            "PhD"],
        required: true        
    },

    educationInstitution: {
        type: String,
        required: true
    },

    educationSemester: {
        type: Int32Array,
        required: true
    },

    jobTitle: {
        type: String,
        required: true
    },

    jobDescription: {
        type: String,
        maxlength: 1024, //Placeholder
        required: true
    }

})

module.exports = mongoose.model('Candidate', schema);