import { json } from "@remix-run/node";
import { Resend } from "resend";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!email || !subject || !message) {
    return json({ success: false, message: "All fields are required" }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY); // Ensure API key is in `.env`
  const respone =  await resend.emails.send({
      from: email,  // Use the email submitted from the form as the sender
      to: "ejimnkonyeoyedika@gmail.com",  // Replace with your email where you want to receive the message
      subject,
      html: `<p>${message}</p>`,
      reply_to: email, // Ensures you can reply to the sender
    });
    console.log("Response:", respone);
    return json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Resend API Error:", error);
    return json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
};
