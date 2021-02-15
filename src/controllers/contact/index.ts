import { Request, Response } from 'express';
import { sendMail } from '../../helpers';

export const contact = (req: Request, res: Response) => {
  const html = `
  <p style="color:blue;font-size:46px;" >hey my name is</p>
  <p>The text is</p>
  <p>I want to speak to the Department.</p>
  `;

  const textVersion = 'Text Version of this Email. JUST TESTING.';
  sendMail(req, res, html, textVersion);
};
