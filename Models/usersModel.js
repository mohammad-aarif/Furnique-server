const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    }
})

const User = mongoose.model('Users', userSchema)
module.exports = User