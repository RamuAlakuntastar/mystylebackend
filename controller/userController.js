const {signupFactory,
    loginFactory,
    createFactory,
    getAllFactory,
    deleteFactory} = require("../utility/userFactory")

const usermodel = require("../model/userModel")


const signup = signupFactory(usermodel);
const login = loginFactory(usermodel);
const usercreate = createFactory(usermodel);
const getAlluser = getAllFactory(usermodel);
const deleteuser = deleteFactory(usermodel);


module.exports = {
    signup,
    login,
    usercreate,
    getAlluser,
    deleteuser
}