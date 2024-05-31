import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const { name, email, phone, topics }: any = data;

  if (topics) {
    const topicsConcatString = topics.join(", ");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL,
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.USER_EMAIL}>`,
      to: process.env.ENDPOINT_EMAIL,
      subject: "ติดต่อผ่านทางเว็บไซต์ของ Outside In",
      text: `ชื่อลูกค้า: ${name}\nอีเมล: ${email}\nเบอร์โทรศัพท์: ${phone}\nหัวข้อ: ${topicsConcatString}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { success: true, msg: "Send Mail Success" },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { success: false, msg: "Internal Server Error" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { success: false, msg: "Internal Server Error" },
    { status: 500 }
  );
};
