import { Request, Response } from 'express';
import { createTransport } from 'nodemailer';
import { google } from 'googleapis';

export const sendMail = async (req: Request, res: Response, text: any, html: any) => {
  const CLIENT_ID = process.env.GMAIL_OAUTH_CLIENT_ID;
  const CLIENT_SECRET = process.env.GMAIL_OAUTH_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GMAIL_OAUTH_REDIRECT_URI;
  const REFRESH_TOKEN = process.env.GMAIL_OAUTH_REFRESH_TOKEN;

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const { email, subject, name, message } = req.body;
    const transporter = createTransport({
      service: process.env.EMAIL_PROVIDER,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_ADDRESS,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        // accessToken: accessToken,
      },
    });

    const mailOptions = {
      // from: email,
      from: 'AMAZNG APP GmbH',
      to: process.env.EMAIL_ADDRESS,
      subject: subject,
      text,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`custom gmail errör: ${error}`);
      } else {
        console.log({ email, subject, name, message, info });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
