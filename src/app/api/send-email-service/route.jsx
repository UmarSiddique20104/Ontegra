import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// HTML template for the email message
const getEmailTemplate = (name, email, phone, serviceType, message,location,buildingNo) => `
<!DOCTYPE html>
<html>
<head>
    <title>New Message from Service Request Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f7f7f7;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .message {
            margin-bottom: 20px;
        }
        .signature {
            margin-top: 20px;
            font-style: italic;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>New Message</h2>
        <div class="message">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Location :</strong> ${location}</p>
            <p><strong>Building (BIN NO):</strong> ${buildingNo}</p>
            <p><strong>Service Type:</strong> ${serviceType}</p>
            <p><strong>Description of issue :</strong></p>
            <p>${message}</p>
        </div>
        <p>Please respond to this message at your earliest convenience.</p>
        <div class="signature">
            <p>Best regards</p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request) {
  //@ts-ignore
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const serviceType = formData.get("serviceType");
  const message = formData.get("message");

  const location = formData.get("location");
  const buildingNo = formData.get("buildingNo");

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    requireTLS: true,
    auth: {
      user: "info@ontegra.ae",
      pass: "DFM@2022@",
    },
  });

  try {
    // send email to the admin
    const info = await transporter.sendMail({
      from: "info@ontegra.ae",
      to: "info@ontegra.ae",
      subject: "Service Request",
      html: getEmailTemplate(name, email, phone, serviceType, message,location,buildingNo),
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
  }
}
