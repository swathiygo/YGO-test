const express = require('express');
const {
    getShops,
    getShop,
    createShop,
    updateShop,
    deleteShop,
} = require('../controllers/shops');

// Include other resource routers
const productRouter = require('./products');

const router = express.Router();

// Re-route into other resource routers
router.use('/:shopId/products', productRouter);

const Shops = require('../models/Shops');
const advancedResults = require('../middleware/advancedResults');



router.route('/').get(advancedResults(Shops), getShops).post(createShop);

router.route('/:id').get(getShop).put(updateShop).delete(deleteShop);

module.exports = router;