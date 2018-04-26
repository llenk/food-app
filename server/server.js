const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static('server/public'));

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});