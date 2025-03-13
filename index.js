const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const productRouter = require("./Routers/productRouter");
const categoriesRouter = require('./Routers/categoriesRouter');
const usersRouter = require('./Routers/userRouter');

// configuration
dotenv.config()
const app = express()


// Middlewares 
app.use(cors())
app.use(express.json())


// Database Connection 
mongoose.connect(process.env.MONGOOSE_CONNECTION_URI)
.then(() => console.log("Database Connected!"))
.catch(err => console.log(err))


// Routes 
app.use('/products', productRouter)
app.use('/categories', categoriesRouter)
app.use('/users', usersRouter)


app.listen(process.env.PORT, () => {
    console.log('Server Running');   
})