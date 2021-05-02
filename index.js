const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

// Creating a local variable contacts to store some dummy contacts
var contacts = [
    {
        name: "Unkown",
        phone: "1234567890"
    },
    {
        name: "Dummy",
        phone: "12398923848"
    }
]

app.get('/', function(req,res){

    // Creating title variable to be used by home.ejs file when needed
    return res.render('home', {
        
        // Passing title and contacts as locals
        title: 'Contacts List',
        contact_list: contacts
    });
});

app.listen(port, function(err){
    if(err){
        console.log('Error running the server');
        return;
    }
    console.log('Express Server running!')
});