const express = require('express');

// Module to set path for view engine
const path = require('path');

const port = 8000;
const app = express();

// Adding ejs template/view engine
app.set('view engine', 'ejs');

// Setting path to add ejs
app.set('views',path.join(__dirname, 'views'));

app.get('/', function(req,res){

    // res.render function renders the home.ejs file to the specified path
    return res.render('home')
});

app.listen(port, function(err){
    if(err){
        console.log('Error running the server');
        return;
    }
    console.log('Express Server running!')
});