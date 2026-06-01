const express = require('express');

const userrouter = express.Router();

const {signup,
    login,
    usercreate,
    getAlluser,
    deleteuser} = require('../controller/userController');


userrouter.post("/signup", signup);
userrouter.post("/login", login);
userrouter.post("/", usercreate);
userrouter.get("/", getAlluser);
userrouter.delete("/:id", deleteuser);

module.exports = userrouter;