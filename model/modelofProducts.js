let mongoose = require('mongoose');
let schema = new mongoose.Schema(
{
    names: {
        type: String,
        required: true
    },
    imageSRC: String,
    costs:  Number,
    descriptions: {
        type: String,
        default: ''
    }

});

module.exports = new mongoose.model('products', schema);