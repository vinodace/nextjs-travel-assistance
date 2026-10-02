const nodemailer = require('nodemailer');

// Load environment variables
require('dotenv').config();

async function testSMTP() {
  console.log('Testing SMTP Connection...');
  console.log('Host:', process.env.SMTP_HOST);
  console.log('Port:', process.env.SMTP_PORT);
  console.log('User:', process.env.SMTP_USER);
  console.log('---');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    logger: true,
    debug: true,
  });

  try {
    // Verify the connection
    console.log('\nVerifying connection...');
    const verified = await transporter.verify();
    console.log('Connection verified:', verified);

    // Send a test email
    console.log('\nSending test email...');
    const info = await transporter.sendMail({
      from: `"Test" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: 'SMTP Test Email',
      html: '<h1>Test Email</h1><p>If you received this, SMTP is working!</p>',
    });

    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);

    await transporter.close();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

testSMTP();
