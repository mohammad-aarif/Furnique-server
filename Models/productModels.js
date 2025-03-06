const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    sub_title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    stock: {
        type: Number,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    sku: {
        type: String,
        require: true,
    },
})

const Product = mongoose.model('Product', productSchema)

// export default Product
module.exports = Product