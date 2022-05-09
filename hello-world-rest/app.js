// Imports
var express = require("express");
var dbConn = require("./lib/db");
var app = express();

// LIST ALL usager
app.get("/usager/list", function (req, res) {
  var sql = "SELECT * from USAGER;";
  dbConn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// SEARCH by EMAIL
app.get("/usager/email/:email", function (req, res) {
  let email = req.params.email;

  var search = "SELECT * from USAGER WHERE EMAIL='" + email + "';";
  dbConn.query(search, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

app.get("/usager/auth", function (req, res) {
  let email = req.query.email;
  let password = req.query.password;

  var search = "SELECT * from USAGER WHERE EMAIL='" + email + "' AND PASSWORD='"+password+"'";
  console.log(search)
  dbConn.query(search, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// DELETE a customer by ID
app.delete("/usager", function (req, res) {
  let email = req.query.email;
  var sql = "DELETE FROM USAGER WHERE EMAIL='" + email + "';";
  dbConn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// ADD an Usager
app.post("/usager/add", function (req, res) {
  let email = req.query.email;
  let name = req.query.name;
  let password = req.query.password;

  var sql = "INSERT INTO USAGER (email, name, password) VALUES ('" +  email + "', '" + name + "', '" + password + "');";

  dbConn.query(sql, function (err, result) {
    if (err) throw err;
  });
  // Return the newly created Usager
  var search = "SELECT * from USAGER WHERE EMAIL='" + email + "';";
  dbConn.query(search, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

///////////////////////////////////////////////////////////////

// LIST ALL customer
app.get("/customer/list", function (req, res) {
  var sql = "SELECT * from CUSTOMER;";
  dbConn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// ADD a customer
app.post("/customer/add", function (req, res) {
  let email = req.query.email;
  let dossierId = req.query.dossierId;

  var sql = "INSERT INTO CUSTOMER (email, dossierId) VALUES ('" +  email + "', '" + dossierId + "');";

  dbConn.query(sql, function (err, result) {
    if (err) throw err;

  });
  // Return the newly created Customer
  var search = "SELECT * from CUSTOMER WHERE EMAIL='" + email + "';";
  dbConn.query(search, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// SEARCH by ID
app.get("/customer/id/:id", function (req, res) {
  let id = req.params.id;

  var search = "SELECT * from CUSTOMER WHERE ID=" + id + ";";
  dbConn.query(search, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


app.get("/customer/pushToken/:processId", function (req, res) {
  let processId = req.params.processId
  var sql = "SELECT pushToken from CUSTOMER WHERE PROCESSID='"+processId+"';";
  dbConn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// SEARCH by EMAIL
app.get("/customer/email/:email", function (req, res) {
  let email = req.params.email;

  var search = "SELECT * from CUSTOMER WHERE EMAIL='" + email + "';";
  dbConn.query(search, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// UPDATE a Customer
app.post("/customer/update", function (req, res) {
  let id = req.query.id;
  let email = req.query.email;
  let dossierId = req.query.dossierId;
  let processId = req.query.processId;
  let pushToken = req.query.pushToken;
  console.log(id, email, dossierId, processId, pushToken)
  var sql;
  if(processId && id){
    sql = "UPDATE CUSTOMER SET PROCESSID = '" + processId +    "' WHERE ID = " +    id +    ";";
  }
  if(pushToken && id){
    sql = "UPDATE CUSTOMER SET PUSHTOKEN = '" + pushToken +    "' WHERE ID = " +    id +    ";";
  }
  if(dossierId && id){
    sql = "UPDATE CUSTOMER SET DOSSIERID = '" + dossierId +    "' WHERE ID = " +    id +    ";";
  }
  if(email && id){
    sql = "UPDATE CUSTOMER SET EMAIL = '" + email +    "' WHERE ID = " +    id +    ";";
  }
  console.log(sql);

  dbConn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  // Return the newly updated Customer
  var search = "SELECT * from CUSTOMER WHERE ID=" + id + ";";
  dbConn.query(search, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


// DELETE a customer by ID
app.get("/customer", function (req, res) {
  let id = req.query.id;
  var sql = "DELETE FROM CUSTOMER WHERE ID=" + id + ";";
  dbConn.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// Basic API /greeting
app.get("/greeting", function (req, res) {
  res.json({ name: "Hello World!" });
});

// API Hello =
app.get("/hello", function (req, res) {
  var firstName = req.query.firstName;
  if (!firstName) {
    firstName = "John";
  }
  var lastName = req.query.lastName;

  if (!lastName) {
    lastName = "Doe";
  }
  console.log("FirstName: ", firstName);
  console.log("LaatName: ", lastName);

  var fullName = firstName + " " + lastName;
  res.json({ fullName: fullName });
});

// LISTEN ON PORT 8080
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
