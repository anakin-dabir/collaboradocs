import nodemailer from "nodemailer";

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      service: "gmail",
      auth: {
        user: "anakindabir@gmail.com" || process.env.NODEMAILER_EMAIL,
        pass: "nzpa ciqx tvyy yzco" || process.env.NODEMAILER_PASSWORD,
      },
    });
    const a = await transporter.sendMail({
      from: '"Fred Foo 👻" <anakindabir@example.com>' || process.env.NODEMAILER_EMAIL,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("Email sent successfully", a.messageId);
  } catch (error) {
    console.log("Error sending email", error);
  }
};

export default sendEmail;