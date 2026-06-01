const {
    createFactory,
    getAllFactory} = require('../utility/userFactory');
    
const ItemModel = require("../model/itemModel")

const createItem = createFactory(ItemModel);    
const getAllItem = getAllFactory(ItemModel);


module.exports = {
    createItem,
    getAllItem,
}