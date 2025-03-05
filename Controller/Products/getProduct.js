const Product = require('../../Models/productModels')


// Getting All Products 
const getAllProducts = async(req, res, next) => {
    try {
        const allProduct = await Product.find().limit(7)
        res.send(allProduct)
    } catch (error) {
        res.status(503).json({message: 'Bad Request'})
    }
}
// Getting Featured Products 
const getFeaturedProducts = async(req, res, next) => {
    try {
        const dataLimit = (req.query.home) ? 7 : null
        const filter = {"featured": "true"}
        const result = await Product.find(filter).limit(dataLimit)
        res.send(result)
        
    } catch (error) {
        res.status(503).json({message: 'Bad Request'})
    }
}

module.exports = {
    getAllProducts,
    getFeaturedProducts
}