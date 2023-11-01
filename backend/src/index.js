/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable camelcase */
// [START gmail_quickstart]




const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
//!!! 
const SCOPES = ['https://mail.google.com/'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'key.json');


/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    console.error(err)
    return null;
  }
}

/**
 * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  console.log(client.credentials)
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
/** 
//Production sendEmail with nodemailer

//production send email without nodemailer

// async function sendEmail(auth, name, email, message) {
//     const gmail = google.gmail({ version: 'v1', auth });
  
//     // Build the email message using the user input
//     const msg = [
//       `To: Boulder Paella <boulderpaella@gmail.com>`,
//       `Reply-To: ${name} <${email}>`,
//       `Subject: Contact Form Submission`,
//       '', // Empty string matters
//       message,
//     ].join('\n');
//     const encoded = Buffer.from(msg).toString('base64');
  
//     await gmail.users.messages.send({
//       userId: 'me',
//       resource: { raw: encoded },
//     });
//   }
  
//   authorize()
//     .then((auth) => {
//       // Pass the user input values from the front end to the sendEmail function        
//       sendEmail(auth, req.body.name, req.body.email, req.body.message);
//     })
//     .catch(console.error);



//Test Email 
/** async function sendEmail(auth, name, email, sub ) {
    const gmail = google.gmail({ version: 'v1', auth });
    
    // you should use nodemailer to encode message
    const msg = [

        'To: Boulder Paella <boulderpaella@gmail.com>',
        'Reply-To: Keyan P. <kpesaran@gmail.com>',
        'Subject: test subject',
        //empty string matters
      '',
      'test 01',
    ].join('\n');
    const encoded = Buffer.from(msg).toString('base64');
  
    await gmail.users.messages.send({
      userId: 'me',
      resource: { raw: encoded },
    });
  }

// authorize().then(sendEmail).catch(console.error);
**/ 
// [END gmail_quickstart]

async function sendEmail(auth, mail) {
    const gmail = google.gmail({ version: 'v1', auth });

    //const encoded = Buffer.from(msg).toString('base64');
    const message = await mail.compile().build();
    const decoded = Buffer.from(message).toString('base64');
    await gmail.users.messages.send({
      userId: 'me',
      resource: { raw: decoded },
    });
  }
//Receive Data from front end. 

authorize()
const express = require('express');
const cors = require('cors')
//installing cors 
const app = express();
const MailComposer = require('nodemailer/lib/mail-composer');
app.use(cors())
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  res.send(message);
  console.log('posted');

  // Setup email data
  const mailOptions = {
    from: 'contact@riceandshinepaella.com',
    to: 'contact@riceandshinepaella.com',
    replyTo: email,
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  //to trigger this authorize you need to hit the /contact endpoint

  authorize()
      .then((auth) => {
          const mail = new MailComposer(mailOptions);
          sendEmail(auth, mail);
      })
    .catch(console.error);
});

app.listen(5002, () => {
  console.log('Server started on port 5002');
});










