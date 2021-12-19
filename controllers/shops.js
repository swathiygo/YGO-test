const path = require('path');
const ErrorResponse = require('../errorResponse');
const asyncHandler = require('../middleware/async');
const Shops = require('../models/Shops');

// @desc      Get all shops
// @route     GET /api/v1/shops
// @access    Public
exports.getShops = asyncHandler(async(req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Get single shop
// @route     GET /api/v1/shops/:id
// @access    Public
exports.getShop = asyncHandler(async(req, res, next) => {
    const shop = await Shop.findById(req.params.id);

    if (!shop) {
        return next(
            new ErrorResponse(`Shop not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({ success: true, data: shop });
});

// @desc      Create new shop
// @route     POST /api/v1/shops
// @access    Private
exports.createShop = asyncHandler(async(req, res, next) => {
    const shop = await Shops.create(req.body);

    res.status(201).json({
        success: true,
        data: shop,
    });
});

// @desc      Update shop
// @route     PUT /api/v1/shops/:id
// @access    Private
exports.updateShop = asyncHandler(async(req, res, next) => {
    const shop = await Shops.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!shop) {
        return next(
            new ErrorResponse(`Shop not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({ success: true, data: shop });
});

// @desc      Delete shop
// @route     DELETE /api/v1/shops/:id
// @access    Private
exports.deleteShop = asyncHandler(async(req, res, next) => {
    const shop = await Shops.findById(req.params.id);

    if (!shop) {
        return next(
            new ErrorResponse(`Shop not found with id of ${req.params.id}`, 404)
        );
    }

    shop.remove();

    res.status(200).json({ success: true, data: {} });
});