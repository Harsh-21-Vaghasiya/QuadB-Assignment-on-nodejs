const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({


    "name": {
        type: String,

    },
    "value": new mongoose.Schema({
        "no": {
            type: Number
        },
        "base_unit": {
            type: String
        },
        "quote_unit": {
            type: String
        },
        "low": {
            type: Number
        },
        "high": {
            type: Number
        },
        "last": {
            type: Number
        },
        "open": {
            type: Number
        },
        "volume": {
            type: Number
        },
        "sell": {
            type: Number
        },
        "buy": {
            type: Number
        },
        "name": {
            type: String
        },
        "at": {
            type: Number
        }
    })



});


module.exports = mongoose.model("Product", ProductSchema);
