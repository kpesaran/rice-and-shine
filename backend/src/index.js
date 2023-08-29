//google api
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5002;

const oauth2Client = new OAuth2(
  "413881650654-uj15rud627vcehlq27inu9319tkftbuv.apps.googleusercontent.com", // ClientID
  "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", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: "1//04NQLhCsIy9Y5CgYIARAAGAQSNwF-L9IrHB3thdZHNVwl7l3rSydyYKm9Wf_-7UdDzMaqyMVZhbMHQQSDN4AlVPQp_AZGnCi_CC4"
});


const accessToken = oauth2Client.getAccessToken()
console.log(accessToken)
async function sendEmail(name, email, message) {
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "boulderpaella@gmail.com", 
         clientId: "413881650654-uj15rud627vcehlq27inu9319tkftbuv.apps.googleusercontent.com",
         clientSecret: "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",
         refreshToken: "1//04NQLhCsIy9Y5CgYIARAAGAQSNwF-L9IrHB3thdZHNVwl7l3rSydyYKm9Wf_-7UdDzMaqyMVZhbMHQQSDN4AlVPQp_AZGnCi_CC4",
         accessToken: accessToken
    }
  });

  const mailOptions = {
    from: email,
    to: 'boulderpaella@gmail.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

//   try {
//     await smtpTransport.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// }
----- 
await gmail.users.messages.send({
  userId: 'me',
  resource: { raw: encoded },
});
}

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    sendEmail(name, email, message);
    console.log(name, email, message )
    res.status(200).send('Email sent successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





// smtp old 
// // suggestion: install Nodemon, create dev script for it... this will watch src code and whenever there is changes it will terminate your server and then update it with new code....
// ///


// // Import Nodemailer at the beginning of the 'index.js' file
// const nodemailer = require('nodemailer');

// // Add this function inside the '/send-email' route handler
// async function sendEmail(name, email, message) {
//   // Replace these credentials with your email service provider details
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.example.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: 'boulderpaella@gmail.com',
//       pass: 'fsdfgdfsf',
//     },
//   });
//     //target:
//   //boulderpaella@gmail.com
//     //g-suite account if you want to log in with a @domain
//   // support@boulderpaella.com 
//     // sales@boulderpaella.com 
//     //receive an email... with @domain, just use foward 
//     //sending an email... with @domain, more difficult doing it through it through node
//   const mailOptions = {
//     from: email,
//     to: 'boulderpaella@outlook.com', // Replace with your email address
//     subject: 'New Message from Contact Form',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// }

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// //telling node to use express to handle the routes, just grabs it
// const app = express();
// const port = process.env.PORT || 5002;

// //this is middleware, when you put it in production, specify an origin
// app.use(cors({
// //origin: 'boulderpaella.com'
// }));
// //parse the json to read it 
// app.use(bodyParser.json());
// //
// app.use(bodyParser.urlencoded({ extended: true }));

// // app.get('/', (req, res) => {
// //   res.send('goodbye world')
// // })

// app.post('/send-email', (req, res) => {
//     const { name, email, message } = req.body;
    
//   sendEmail(name, email, message);
//     console.log(name, email, message )
//     res.status(200).send('Email sent successfully');
//   });
  
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
