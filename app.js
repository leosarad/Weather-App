let express = require('express');
let route = require('./src/routes.js');
let hbs = require('hbs');
let path = require('path');


let app = new express();

// Declaring Global App Variables
app.variables = {
    title : "Weather App",
    publicDirectoryPath : path.join(__dirname,'./public'),
    }

// Set View Engiene
app.set('view engine','hbs')

// Route Setup For Static Files
app.use(express.static(app.variables.publicDirectoryPath));


// Watch Route Requests
route.start(app);

// App port Setup
app.listen(3000,()=>{
    console.log("Listening to port 3000");
})