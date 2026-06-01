const bcrypt = require("bcrypt")

const signupFactory = (factoryModel) => {
    return async (req, res) => {
        try {
            const {username, email, password, confirmPassword} = req.body
            const hashPassword = await bcrypt.hash(password, 10)
            const findUser = await factoryModel.findOne({email})
            if(!findUser) {
                const newUser = await factoryModel.create({
                    username,
                    email,
                    password: hashPassword,
                    confirmPassword: hashPassword
                })
                res.status(201).json({
                    status: "success",
                    data: newUser
                })
            } else {
                res.status(400).json({
                    status: "fail",
                    message: "User already exists"
                })
            }
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message
            })
        }
    }
}

const loginFactory = (factoryModel) => {
    return async (req, res) => {
        try {
            const {email, password} = req.body
            const findUser = await factoryModel.findOne({email})
            if(!findUser) {
                res.status(200).json({
                    status: "failure",
                    message: "invalid email or password"
                })
            } else {
                const isPasswordMatch = await bcrypt.compare(password, findUser.password)
                if(isPasswordMatch) {
                    res.status(200).json({
                        status: "success",
                        data: findUser
                    })
                } else {
                    res.status(200).json({
                        status: "failure",
                        message: "invalid email or password"
                    })
                }
            }

        }catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message
            })
        }
    }
}

const createFactory = (factoryModel) => {
    return async (req, res) => {
        try {
            const datadetails = req.body 
            const newData = await factoryModel.create(datadetails)
            res.status(201).json({
                status: "success",
                message: "Data created successfully",
                data: newData 
            })

        }catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message
            })
        }
    }
}

const getAllFactory = (factoryModel) => {
    return async (req, res) => {
        try {
            const allData = await factoryModel.find()
            res.status(200).json({
                status: "success",
                data: allData
            })

        }catch (error) {   
            res.status(500).json({
                status: "error",
                message: error.message
            })
        }
    }
}

const deleteFactory = (factoryModel) => {
    return async (req, res) => {
        try {
            const {id} = req.params
            const deletedData = await factoryModel.findByIdAndDelete(id)
            if(deletedData) {
                res.status(200).json({
                    status: "success",
                    message: "Data deleted successfully"
                })
            } else {
                res.status(404).json({
                    status: "failure",
                    message: "Data not found"
                })
            }

        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message
            })
        }
    }
}

const addcartFactory = (factoryModel) => {
    return async (req, res) => {
        try {
            const { name, image, price, quantity } = req.body;

            const newData = await factoryModel.create({
                name,
                image,
                price,
                quantity,
                totalPrice: price * quantity
            });

            res.status(201).json({
                status: "success",
                data: newData
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message
            });
        }
    };
};


const removeallcartFactory = (factoryModel) => {
    return async (req, res) => {
        try {
            const result = await factoryModel.deleteMany({});

            res.status(200).json({
                status: "success",
                message: `${result.deletedCount} cart items deleted successfully`
            });

        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message
            });
        }
    };
};


module.exports = {
    signupFactory,
    loginFactory,
    createFactory,
    getAllFactory,
    deleteFactory,
    addcartFactory,
    removeallcartFactory
}