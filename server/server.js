const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static('server/public'));

let foodArray = [
    {name: 'Noodles', 
        deliciousness_rating: 4,
        is_hot: false}
];

app.get('/food', function(req, res) {
    console.log('eyy');
    res.send(foodArray);
});

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});