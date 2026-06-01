const {  addcartFactory,
    deleteFactory,
    removeallcartFactory,
     getAllFactory} = require("../utility/userFactory")

const cartModel = require("../model/cartModel")

const addcart = addcartFactory(cartModel);
const deletecart = deleteFactory(cartModel);
const getAllCart = getAllFactory(cartModel);
const removeallcart = removeallcartFactory(cartModel);


module.exports = {
    addcart,
    deletecart,
    getAllCart,
    removeallcart
}