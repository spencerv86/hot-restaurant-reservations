// REQUIRE EXPRESS
const express = require("express");

// CREATE AN INSTANCE OF EXPRESS
const app = express();

// CREATE A PORT FOR THE APP TO RUN
const PORT = process.env.PORT || 8080;
// BUT ALSO LISTEN TO ENVIRONMENT VARIABLES WE CAN DEPLOY TO HEROKU

// ADD MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CREATE AN ARRAY OF TABLES
const tables = [

];
// CREATE AN ARRAY OF WAITLIST
const waitList = [

];


// ARRAYS OF OBJECTS. OBJECTS SHOULD HAVE
// NAME
// PHONE
// EMAIL
// ID

//HTML ROUTES
// ROUTE FOR HOME
// ROUTE FOR TABLES
// ROUTE FOR RESERVE

// API ROUTES

// GET ALL TABLE DATA

// CREATE A TABLE/RESERVATION

// LISTEN ON THE PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });