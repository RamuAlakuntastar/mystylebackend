const {addcart,
    deletecart,
    removeallcart,
    getAllCart
} = require('../controller/cartController')

const express = require('express')
const cartrouter = express.Router()


cartrouter.post('/addcart', addcart)
cartrouter.get("/getcart", getAllCart)
cartrouter.delete('/deletecart/:id', deletecart)
cartrouter.delete('/removeallcart', removeallcart)

module.exports = cartrouter