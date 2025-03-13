const User = require("../../Models/usersModel")

const newUser = async(req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(200).send({ message: 'User Added Successfully!'})
    } catch (error) {
        res.status(503).send(error)
    }    
}

module.exports ={
    newUser
}