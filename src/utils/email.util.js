import { transporter } from "../config/email.config.js";

export const sentOTPEmail = async (email, otp) => {
    try {
        const mailOptions = {
            to: email,
            subject: 'OTP VERIFICATION — BLOG APPLICATION (medium.clone.pk)',
            text: `Your OTP is ${otp}. This code is valid for 10 minutes.`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>OTP Verification</h2>
                    <p>Thank you for registering with Medium Clone.</p>
                    <p>Please use the following code to verify your email address:</p>
                    <div style="font-size: 24px; font-weight: bold; padding: 10px; background-color: #f0f0f0; display: inline-block; margin: 20px 0;">${otp}</div>
                    <p>This code will expire in 10 minutes.</p>
                    <p>If you did not create this account, please ignore this email.</p>
                    <p>Best regards,</p>
                    <p>Medium Clone Team</p>
                </div>
            `,
        }

        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        return false;
    }
}