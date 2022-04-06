var express = require('express');
var app = express();

// Basic API /greeting
app.get('/greeting', function (req, res) {
  res.json({"name": "Hello World!"});
});

// API Hello = 
app.get('/hello', function (req, res) {
    var firstName = req.query.firstName;
    if (!firstName){
      firstName = "John";
    }
    var lastName = req.query.lastName;
    
    if (!lastName){
      lastName = "Doe";
    }
    console.log("FirstName: ", firstName);
    console.log("LaatName: ", lastName);

    var fullName =  firstName + ' ' + lastName;
    res.json({"fullName":fullName});
  });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});