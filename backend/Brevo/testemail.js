import { transporter } from './nodemailer.js';
import dotenv from 'dotenv';

dotenv.config();
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS);
const sendTestEmail = async () => {
  try {
    const mailOptions = {
      from: process.env.SENDER_EMAIL_ID,
      to: 'amitbandekar419@gmail.com', // Replace with the recipient's email address
      subject: 'Test Brevo Email',
      html: '<p>This is a test email sent using Nodemailer and Brevo.</p><h1>Fuck You</h1>',
    };

    const response = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully', response);
  } catch (error) {
    console.error('Error sending test email', error);
  }
};

sendTestEmail();
