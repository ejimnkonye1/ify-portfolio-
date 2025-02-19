// app/routes/send-email.ts
import type { ActionFunctionArgs } from "@remix-run/node";
import nodemailer from "nodemailer";
import { redirect } from "@remix-run/node"; // Import redirect

// Action function to handle form submission
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Validate form data
  if (!name || !email || !subject || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });

  // Define email options
  const mailOptions = {
    from: email.toString(), // Sender's email
    to: process.env.EMAIL_USER, // Your email address
    subject: `New message from ${name}: ${subject}`, // Email subject
    text: message.toString(), // Email body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    // Redirect to a success page or back to the contact page
    return redirect("/contact?status=success");
  } catch (error) {
    console.error("Error sending email:", error);
    // Redirect to an error page or back to the contact page
    return redirect("/contact?status=error");
  }
};

// Default export: A simple placeholder component
export default function SendEmail() {
  return null; // This route doesn't need to render anything
}