const express = require('express');
const {
    getAds,
    getAd,
    addAds
} = require('../controllers/ads');

//const Shops = require('../models/Shops');
//const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });

router.route('/').get(getAds).post(addAds);
router.route('/:id').get(getAd);

module.exports = router;