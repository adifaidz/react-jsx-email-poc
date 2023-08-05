import 'dotenv/config';

import { render } from '@react-email/render';
import nodemailer, { type TransportOptions } from 'nodemailer';
import * as React from 'react';
import { AirbnbReviewEmail } from './templates/airbnb-review';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
} as TransportOptions);

const emailHtml = render(
<AirbnbReviewEmail {...AirbnbReviewEmail.PreviewProps}/>
);

const options = {
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  html: emailHtml,
};

const main = async () => {
  await transporter.sendMail(options);
}

void main();