// Importing express
const express = require('express');

// Initializing port
const port = 8000;

// Creating object for express
const app = express();

app.get('/', function(req,res){
    res.send('<h1>Working!</h1>')
});

app.listen(port, function(err){
    if(err){
        console.log('Error running the server');
        return;
    }
    console.log('Express Server running!')
});