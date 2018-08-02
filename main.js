const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Exercise = require('./models/testModel');
var routes = require('./routes/testRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:12345678A@ds018308.mlab.com:18308/test_db', { useNewUrlParser: true });
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

app.get('/', function(req, res){
   res.send("Hello world!");
});

var server = app.listen(3001, function (){

    var host = server.address().address;
    var port = server.address().port;
 
    console.log("App listening at http://%s:%s", host, port);
});