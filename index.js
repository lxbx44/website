// Requirements
const express = require('express');
const ejs = require('ejs'); 
const cookie = require('cookie-parser')

const db = require('./routes/db_config');

const PORT = 3000;

// Init server
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(cookie());

app.use(express.json())

db.connect((err) => {
    if (err) throw err;
})

app.listen(PORT);


// 'Get' pages
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/projects', function (req, res) {
    db.query('SELECT * FROM projects', (err, result) => {
        res.render('projects', {result: result})
    })    
});

app.get('/search', function (req, res) {
    res.render('search');
});

app.get('/search_info', function (req, res) {
    res.render('search_info');
});


app.get('/pm', function (req, res) {
    res.render('prj/pm')
})

