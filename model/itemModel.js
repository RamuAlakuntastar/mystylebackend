const mongoose = require('mongoose');


const itemSchemaRules = {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}


const itemSchema = new mongoose.Schema(itemSchemaRules);

const ItemModel = mongoose.model("ItemModel", itemSchema);

module.exports = ItemModel;