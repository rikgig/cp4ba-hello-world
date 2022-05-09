// Imports
var express = require("express");
var myParser = require("body-parser");
var app = express();
require('dotenv').config();

app.use(myParser.urlencoded({extended : true}));

// Reference
// https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail
//

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(myParser.json());

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
//const client = require('twilio')(accountSid, authToken);
const fromMobile = process.env.TWILIO_FROM_MOBILE;
//
// REST API send "sms"
//
app.get("/sms", function(req, res) {

  console.log("Sending SMS");
  //client.messages
  //.create({
  //   body: 'Message envoyer par mon Twilio SMS compte, Bonne journée Lucas',
  //   from: '\''+ fromMobile + '\'',
  //   to: '+15143456767'
  // })
  // .then(message => console.log(message.sid));

  res.json({ name: "Sending sms to: hello" });
});

//
// REST API send "email"
//
app.post("/email", function (req, res) {

  console.log(req.body);
  if (!req.body.to) {
    throw Error("to is required");
  }
  if (!req.body.from) {
    throw Error("from is required");
  }
  if (!req.body.subject) {
    throw Error("subject is required");
  }
  if (req.body.subject.length < 3) {
    throw Error("subject should have at least 3 characters");
  }
  if (!req.body.html) {
    throw Error("html is required");
  }
  if (req.body.html.length < 3) {
    throw Error("html should have atleast 3 characters");
  }
    //ES6
  var msg = {
      to: req.body.to,
      from: req.body.from,
      subject: req.body.subject,
      html: req.body.html
    };

  sgMail
    .send(msg)
    .then(() => {}, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });
  
  res.json({ name: "Sending email to: " + req.body.to });

});

// LISTEN ON PORT 8080
app.listen(8080, function () {
  console.log("Hello World MAIL app listening on port 8080!");
});
