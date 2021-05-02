const express = require('express');
const { url } = require('inspector');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

// Adding the middleware parser using app.use method
app.use(express.urlencoded());

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

app.get('/profile', function(req, res){
    res.render('profile', {
        title: "Profile"
    })
});

app.post('/new-contact', function(req, res){

    // Pushing the req.body (Entered name and phone number) to the contacts variable and redirecting back to the same page.
    contacts.push(req.body);
    return res.redirect('back')
})

app.listen(port, function(err){
    if(err){
        console.log('Error running the server');
        return;
    }
    console.log('Express Server running!')
});