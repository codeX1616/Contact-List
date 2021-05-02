const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

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
    return res.render('home', {
        title: 'Contacts List',
        contact_list: contacts
    });
});

// Rendering a simple profile page using the get request
app.get('/profile', function(req, res){
    res.render('profile', {
        title: "Profile"
    })
});

// Creating a post request for submitting contact details and redirecting to profile page
app.post('/new-contact', function(req, res){
    return res.redirect('/profile')
})

app.listen(port, function(err){
    if(err){
        console.log('Error running the server');
        return;
    }
    console.log('Express Server running!')
});