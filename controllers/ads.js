const ErrorResponse = require('../errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Products');
//const Shops = require('../models/Shops');
const Ads = require('../models/Ads');

// @desc      Get ads
// @route     GET /api/v1/ads
// @route     GET /api/v1/products/:productId/ads
// @access    Public
exports.getAds = asyncHandler(async(req, res, next) => {
    let query;

    if (req.params.productId) {
        query = Ads.find({ product: req.params.productId });
    } else {
        query = Ads.find().populate({
            path: 'product',
            select: 'product_name price'
        });
    }

    const ads = await query;

    res.status(200).json({
        success: true,
        count: ads.length,
        data: ads
    });

});

// @desc      Get single ad
// @route     GET /api/v1/ads/:id
// @access    Public
exports.getAd = asyncHandler(async(req, res, next) => {
    const ads = await Ads.findById(req.params.id).populate({
        path: 'product',
        select: 'product_name price'
    });

    if (!ads) {
        return next(
            new ErrorResponse(`No ad with the id of ${req.params.id}`),
            404
        );
    }

    res.status(200).json({
        success: true,
        data: ads
    });
});

// @desc      Add Ads
// @route     POST /api/v1/products/:productId/ads
// @access    Private
exports.addAds = asyncHandler(async(req, res, next) => {
    req.body.product = req.params.productId;
    //req.body.user = req.user.id;

    const product = await Product.findById(req.params.productId);

    if (!product) {
        return next(
            new ErrorResponse(`No product with the id of ${req.params.productId}`),
            404
        );
    }

    const ads = await Ads.create(req.body);

    res.status(200).json({
        success: true,
        data: ads
    });
});