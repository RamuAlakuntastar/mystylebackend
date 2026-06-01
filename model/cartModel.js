const mongoose = require('mongoose');

const cartSchemaRules = {
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}
const cartSchema = new mongoose.Schema(cartSchemaRules);

const cartModel = mongoose.model('CartModel', cartSchema);

module.exports = cartModel;