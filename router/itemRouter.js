const {  createItem,
    getAllItem} = require('../controller/itemController')
const express = require("express")
const itemRouter = express.Router()

itemRouter.post("/", createItem)
itemRouter.get("/dashboard", getAllItem)


module.exports = itemRouter