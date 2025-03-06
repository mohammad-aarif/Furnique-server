const { default: mongoose } = require("mongoose");

const categorySchema = mongoose.Schema({
    category:{
        type: String,
        require: true,
    },
    sub_categories: {
        type: Array,
        require: true,
    }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category;