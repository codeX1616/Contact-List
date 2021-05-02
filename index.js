const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', function(req,res){

    // Creating title variable to be used by home.ejs file when needed
    return res.render('home', {title: 'Contacts List'});
});

app.listen(port, function(err){
    if(err){
        console.log('Error running the server');
        return;
    }
    console.log('Express Server running!')
});