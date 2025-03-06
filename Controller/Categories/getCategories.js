const Category = require("../../Models/categoriesModel")

const getCatagories = async(req, res, next) => {
    try{
        const result = await Category.find()
        res.send(result)
    }catch(err){
        res.status(503)
    }
}

module.exports ={
    getCatagories
}