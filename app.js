var express = require('express');

var app = express();
var cors = require('cors');
var fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

app.use(fileUpload());
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: true, parameterLimit: 50000}));
app.use(cookieParser());

app.get('/', (req, res)=> {
    res.json({message: 'Welcome to server'})
})


module.exports = app;