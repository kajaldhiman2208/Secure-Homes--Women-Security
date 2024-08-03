// src/server/mail.js
import nodemailer from 'nodemailer';
import { username, password } from './crd.js'; // Make sure to create crd.js for your credentials

const mail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: username, pass: password },
  connectionTimeout: 10000,
});

// const sendEmail = async (location) => {
//   try {
//     await mail.sendMail({
//       from: username,
//       to: ['amisha0160.be21@chitkara.edu.in', 'amishasam80@gmail.com'],
//       subject: 'Hello ji',
//       html: 'Welcome to Nodemailer session',
//     });
//     console.log('Mail sent');
//     return true;
//   } catch (err) {
//     console.log('Mail has not sent');
//     console.log(err);
//     return false;
//   }
// };


const sendEmail = async (location) => {
  try {
    // const emailBody = `<p>Location: ${location}</p>`; 
    await mail.sendMail({
      from: username,
      to: ['', ''],
      subject: 'Hello ji',
      html: `<h1>Help is needed at the following location: </h1>
              <p><strong>Location: ${location}</strong></p>`,
    });
    console.log('Mail sent');
    return true;
  }
  catch (err) {
    console.log('Mail has not sent');
    console.log(err);
    return false;
  }
};

export default sendEmail;
