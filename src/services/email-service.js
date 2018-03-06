'use strict';

const configuration = require('../config');
const sendGrid = require('@sendgrid/mail');
sendGrid.setApiKey(configuration.EMAIL_GRID_KEY);

exports.send = async (to, subject, body) => {
    sendGrid.send({
        to: to,
        from: 'ayrtondenner_2013@hotmail.com',
        subject: subject,
        html: body
    });
};