const express = require('express');
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const userrouter = require("./router/userRouter")
const itemrouter = require("./router/itemRouter")
const cartrouter = require("./router/cartRouter")

app.use(express.json())
app.use("/api/user", userrouter)
app.use("/api/item", itemrouter)
app.use("/api/cart", cartrouter)

const {USER, PASSWORD, PORT} = process.env
const durl = `mongodb+srv://${USER}:${PASSWORD}@cluster0.5liukrt.mongodb.net/?appName=Cluster0`

mongoose.connect(durl)
                .then(() => console.log("Connected to MongoDB"))
                .catch((err) => console.log(err.message))



app.use((req, res) => {
    res.status(404).json({
        status: "error",
        message: "Not Found"
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})