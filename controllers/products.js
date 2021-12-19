const ErrorResponse = require('../errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Products');
const Shops = require('../models/Shops');

// @desc      Get products
// @route     GET /api/v1/products
// @route     GET /api/v1/shops/:shopId/products
// @access    Public
exports.getProducts = asyncHandler(async(req, res, next) => {
    let query;

    if (req.params.shopId) {
        query = Product.find({ shop: req.params.shopId });
    } else {
        query = Product.find().populate({
            path: 'shop',
            select: 'name shop_category description'
        });
    }

    const products = await query;

    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });

});

// @desc      Get single product
// @route     GET /api/v1/products/:id
// @access    Public
exports.getProduct = asyncHandler(async(req, res, next) => {
    const product = await Product.findById(req.params.id).populate({
        path: 'shop',
        select: 'name description shop_category'
    });

    if (!product) {
        return next(
            new ErrorResponse(`No product with the id of ${req.params.id}`),
            404
        );
    }

    res.status(200).json({
        success: true,
        data: product
    });
});

// @desc      Add product
// @route     POST /api/v1/shops/:shopId/products
// @access    Private
exports.addProduct = asyncHandler(async(req, res, next) => {
    req.body.shop = req.params.shopId;
    //req.body.user = req.user.id;

    const shop = await Shops.findById(req.params.shopId);

    if (!shop) {
        return next(
            new ErrorResponse(`No shop with the id of ${req.params.shopId}`),
            404
        );
    }

    // Make sure user is bootcamp owner
    /*if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(
            new ErrorResponse(
                `User ${req.user.id} is not authorized to add a course to bootcamp ${bootcamp._id}`,
                401
            )
        );
    }*/

    const product = await Product.create(req.body);

    res.status(200).json({
        success: true,
        data: product
    });
});

// @desc      Update product
// @route     PUT /api/v1/product/:id
// @access    Private
exports.updateProduct = asyncHandler(async(req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(
            new ErrorResponse(`No product with the id of ${req.params.id}`),
            404
        );
    }

    // Make sure user is course owner
    /*if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(
            new ErrorResponse(
                `User ${req.user.id} is not authorized to update course ${course._id}`,
                401
            )
        );
} */

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: product
    });
});

// @desc      Delete product
// @route     PUT /api/v1/product/:id
// @access    Private
exports.deleteProduct = asyncHandler(async(req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(
            new ErrorResponse(`No product with the id of ${req.params.id}`),
            404
        );
    }

    // Make sure user is course owner
    /*if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(
            new ErrorResponse(
                `User ${req.user.id} is not authorized to update course ${course._id}`,
                401
            )
        );
} */

    await product.remove();

    res.status(200).json({
        success: true,
        data: {}
    });
});