const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// load env vars
dotenv.config({ path: './config.env' });

// load models
const Shops = require('./models/Shops');
const Product = require('./models/Products');
const Ads = require('./models/Ads');
const Deals = require('./models/Deals');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// Read JSON files
const shops = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/shops.json`, 'utf-8')
);

const product = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/products.json`, 'utf-8')
);

const ads = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/ads.json`, 'utf-8')
);

const deals = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/deals.json`, 'utf-8')
);

// Import into DB
const importData = async() => {
    try {
        await Shops.create(shops);
        await Products.create(products);
        await Ads.create(ads);
        await Deals.create(deals);
        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

// Delete data
const deleteData = async() => {
    try {
        await Shops.deleteMany();
        await Product.deleteMany();
        await Ads.deleteMany();
        await Deals.deleteMany();
        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}