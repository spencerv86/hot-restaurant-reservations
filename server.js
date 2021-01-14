// REQUIRE EXPRESS
const express = require("express");
const path = require("path");

// CREATE AN INSTANCE OF EXPRESS
const app = express();

// CREATE A PORT FOR THE APP TO RUN
const PORT = process.env.PORT || 8080;
// BUT ALSO LISTEN TO ENVIRONMENT VARIABLES WE CAN DEPLOY TO HEROKU

// ADD MIDDLEWARE
app.use(express.urlencoded({
    extended: true
}));
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
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});
// ROUTE FOR TABLES
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/tables.html"));
});
// ROUTE FOR RESERVE
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/reserve.html"));
})
// API ROUTES
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// app.get("/api/tables/:table", function(req, res) {
//     const chosen = req.params.table;

//     console.log(chosen);


// })

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

// GET ALL TABLE DATA

// CREATE A TABLE/RESERVATION
app.post("/api/tables", function(req, res) {
    var newTable = req.body;


    if()
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});

app.post("/api/waitlist", function (req, res) {
    var newWaitlist = req.body;

    newWaitlist.routeName = newWaitlist.name.replace(/\s+/g, "").toLowerCase();

    console.log(newWaitlist);

    waitList.push(newWaitlist);

    res.json(newWaitlist);
});

// LISTEN ON THE PORT
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});