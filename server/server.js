const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const Food = require('./models/food.schema');

app.use(bodyParser.json());

app.use(express.static('server/public'));

const databaseUrl = 'mongodb://localhost:27017/food-app';
mongoose.connect(databaseUrl);
mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});
mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error);
});
//CONNECTING TO MONGO END

app.get('/food', function (req, res) {
    Food.find({})
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(500);
        });
});
app.post('/food', function (req, res) {
    Food.create(req.body)
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
        console.log(error);
    });
});

app.delete('/food', function (req, res) {
    Food.findByIdAndRemove(req.query._id)
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
        console.log(error);
    });
});

app.put('/food', function (req, res) {
    Food.findByIdAndUpdate(req.body._id, req.body)
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
        console.log(error);
    });
});

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});