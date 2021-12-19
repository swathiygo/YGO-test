const ErrorResponse = require('../errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Products');
//const Shops = require('../models/Shops');
const Deals = require('../models/Deals');

// @desc      Get deals
// @route     GET /api/v1/deals
// @route     GET /api/v1/products/:productId/deals
// @access    Public
exports.getDeals = asyncHandler(async(req, res, next) => {
    let query;

    if (req.params.productId) {
        query = Deals.find({ product: req.params.productId });
    } else {
        query = Deals.find().populate({
            path: 'product',
            select: 'product_name price'
        });
    }

    const deals = await query;

    res.status(200).json({
        success: true,
        count: deals.length,
        data: deals
    });

});

// @desc      Get single deal
// @route     GET /api/v1/deals/:id
// @access    Public
exports.getDeal = asyncHandler(async(req, res, next) => {
    const deals = await Deals.findById(req.params.id).populate({
        path: 'product',
        select: 'product_name price'
    });

    if (!deals) {
        return next(
            new ErrorResponse(`No Deal with the id of ${req.params.id}`),
            404
        );
    }

    res.status(200).json({
        success: true,
        data: deals
    });
});

// @desc      Add Deals
// @route     POST /api/v1/products/:productId/deals
// @access    Private
exports.addDeals = asyncHandler(async(req, res, next) => {
    req.body.product = req.params.productId;
    //req.body.user = req.user.id;

    const product = await Product.findById(req.params.productId);

    if (!product) {
        return next(
            new ErrorResponse(`No product with the id of ${req.params.productId}`),
            404
        );
    }

    const deals = await Deals.create(req.body);

    res.status(200).json({
        success: true,
        data: deals
    });
});