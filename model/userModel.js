const mongoose = require("mongoose")

const userShemaRules = {
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },
  Timestamp: {
    type: Date,
    default: Date.now,
  },
}

const userSchema = new mongoose.Schema(userShemaRules)

const usermodel = mongoose.model("UserModel", userSchema)


module.exports = usermodel
