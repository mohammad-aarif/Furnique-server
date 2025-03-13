const User = require("../../Models/usersModel")

const newUser = async(req, res, next) => {
    try {
        const userExist = await User.findOne({email: req.body.email})
        if(userExist){
            return res.status(400).json({message: "User Already Exist"})
        }
        const user = await User.create(req.body)
        res.status(201).json({ message: 'User Added Successfully!'})
    } catch (error) {
        res.status(503).json(error)
    }    
}

module.exports ={
    newUser
}