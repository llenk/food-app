const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const Food = require('./models/food.schema');

app.use(bodyParser.urlencoded({ extended: true }));

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

let foodArray = [
    {
        name: 'Noodles',
        deliciousness_rating: 4,
        is_hot: false
    }
];

app.get('/food', function (req, res) {
    console.log('eyy');
    Food.find({})
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(500);
        });
});

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});