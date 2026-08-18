import nodemailer from 'nodemailer';

import { serviceEmail, serviceEmailPass } from '@/config/initial.config.js';

// Create a transporter using SMTP transport
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: serviceEmail,
        pass: serviceEmailPass,
    },
});
