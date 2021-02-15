"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contact = void 0;
const helpers_1 = require("../../helpers");
const contact = (req, res) => {
    const html = `
  <p style="color:blue;font-size:46px;" >hey my name is</p>
  <p>The text is</p>
  <p>I want to speak to the Department.</p>
  `;
    const textVersion = 'Text Version of this Email. JUST TESTING.';
    helpers_1.sendMail(req, res, html, textVersion);
};
exports.contact = contact;
//# sourceMappingURL=index.js.map