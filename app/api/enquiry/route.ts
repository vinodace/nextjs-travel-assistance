import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a persistent transporter instance
// let transporter: nodemailer.Transporter | null = null;

// function getTransporter() {
//   if (!transporter) {
//     transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: true, // Force SSL for port 465
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//       pool: {
//         maxConnections: 1,
//         maxMessages: 100,
//         rateDelta: 1000,
//         rateLimit: 10,
//       },
//       logger: true, // Enable logging
//       debug: true,  // Enable debug mode
//     });
//   }
//   return transporter;
// }


console.log("SMTP_HOST:", process.env.SMTP_HOST); 
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


export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.MAIL_TO) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not properly configured.",
        },
        { status: 500 }
      );
    }


    try {
      await transporter.sendMail({
         from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "New Contact Form Enquiry",
        html: `
          <h2>New Contact Form Enquiry</h2>

          <table border="1" cellpadding="10" cellspacing="0">
          <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
          </tr>
          <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
          </tr>
          <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
          </tr>
          <tr>
              <td><strong>Message</strong></td>
              <td>${message}</td>
          </tr>
          </table>
        `,
      });

      return NextResponse.json({
        success: true,
        message: "Email sent successfully.",
      });
    } catch (error) {
      throw error;
    }

  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send email. Please check server logs.",
      },
      { status: 500 }
    );
  }
}