const Product = require('../../Models/productModels')


// Getting All Products 
const getAllProducts = async(req, res, next) => {
    try {
        const dataLimit = 12
        const dataSkip = parseInt(req.query.page) - 1;
        console.log(dataSkip);
        
        const allProduct = await Product.find().skip(dataSkip*dataLimit).limit(dataLimit)
        res.send(allProduct)
    } catch (error) {
        res.status(503).json({message: 'Bad Request'})
    }
}
// Getting total number of Product 
const getTotalProducts = async(req, res, next) => {
    try {
        const count = await Product.estimatedDocumentCount()
        res.send({'count' : count})
    } catch (error) {
        res.status(503).json({message: 'Bad Request'})
    }
}
// Getting New Arrival Products 
const getNewArriavalProducts = async(req, res, next) => {
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
    getNewArriavalProducts,
    getTotalProducts,
    getFeaturedProducts
}