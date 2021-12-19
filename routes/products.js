const express = require('express');
const {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

// Include other resource routers
const adRouter = require('./ads');
const dealRouter = require('./deals');

const router = express.Router({ mergeParams: true });

// Re-route into other resource routers
router.use('/:productId/ads', adRouter);
router.use('/:productId/deals', dealRouter);

//const router = express.Router({ mergeParams: true });

router.route('/').get(getProducts).post(addProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);



//router.route('/:id').get(getShop).put(updateShop).delete(deleteShop);

module.exports = router;