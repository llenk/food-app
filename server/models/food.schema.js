const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: { type: String },
    deliciousness_rating: { type: Number },
    is_hot: { type: String }
});

module.exports = mongoose.model('Food', foodSchema);
