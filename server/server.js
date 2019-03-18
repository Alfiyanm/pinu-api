var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Name} = require('./models/name');

var app = express();

app.use(bodyParser.json());

app.post('/nama', (req, res) => {
    var name = new Name({
        nama: req.body.nama
    });

    name.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};