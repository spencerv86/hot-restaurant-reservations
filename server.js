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
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
// ROUTE FOR TABLES
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
// ROUTE FOR RESERVE
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})
// API ROUTES
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

// app.get("/api/tables/:table", function(req, res) {
//     const chosen = req.params.table;

//     console.log(chosen);


// })

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

// GET ALL TABLE DATA

// CREATE A TABLE/RESERVATION

// LISTEN ON THE PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });