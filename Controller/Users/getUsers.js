const User = require("../../Models/usersModel")

const getSingleUser = async(req, res, next) => {
    try {
        console.log(req.params.email)
        const user = await User.findOne({email: req.params.email})
        // console.log(user)
        res.send(user)
    } catch (error) {
        res.status(404).json({message : 'User Not Found'})
    }
}

module.exports = {
    getSingleUser
}