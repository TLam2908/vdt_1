import resend from "../config/resend";
import React from  "react";

type Params = {
  to: string;
  subject: string;
  text: string;
  react: React.ReactElement;
};

export const sendMail = async ({ to, subject, text, react }: Params) => 
    await resend.emails.send({
        from: "Registration <no-reply@autopart-ecommerce.me>",
        to: to,
        subject,
        text,
        react
    })