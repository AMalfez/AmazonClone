const express = require('express');
const BodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(BodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(3000, ()=>{
    console.log('server started!');
});