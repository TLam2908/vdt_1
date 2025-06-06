import resend from "../config/resend";
import React from  "react";
import RegistrationEmail from "../emails/registration";
import { Registration } from "@prisma/client";

type Params = {
  to: string;
  subject: string;
  text: string;
  registration: Registration
};

export const sendMail = async ({ to, subject, text, registration }: Params) => 
    await resend.emails.send({
        from: "Registration <no-reply@autopart-ecommerce.me>",
        to: to,
        subject,
        text,
        react: React.createElement(RegistrationEmail, {props: registration})
    })