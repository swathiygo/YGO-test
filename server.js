const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors');
// const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./db');

// Load env vars
dotenv.config({ path: './config.env' });

//Load models
const Shops = require('./models/Shops');
const Product = require('./models/Products');
const User = require('./models/User');
const Ads = require('./models/Ads');
const Deals = require('./models/Deals');

// Connect to database
connectDB();

// Route files
const shops = require('./routes/shops');
const auth = require('./routes/auth');
const products = require('./routes/products');
const ads = require('./routes/ads');
const deals = require('./routes/deals');

const app = express();

//Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

//Dev logging middleware
//app.use(logger);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// File uploading
//app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/shops', shops);
app.use('/api/v1/auth', auth);
app.use('/api/v1/products', products);
app.use('/api/v1/ads', ads);
app.use('/api/v1/deals', deals);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close the server and exit process
    server.close(() => process.exit(1));
});