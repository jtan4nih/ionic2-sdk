var express = require('express');
var morgan = require('morgan');
var path= require('path');
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/www'));
// app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// console.log('/scripts mapped to [' + path.join(__dirname, '/app/scripts') + ']');
app.use('/build', express.static(path.join(__dirname, '/www/build')));
app.listen(process.env.PORT || 5000);
app.use(function(req, res){
res.sendFile(__dirname + "/www/index.html");
});
console.log('1 app started!');
