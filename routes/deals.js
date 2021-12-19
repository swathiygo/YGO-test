const express = require('express');
const {
    getDeals,
    getDeal,
    addDeals
} = require('../controllers/deals');

const router = express.Router({ mergeParams: true });

router.route('/').get(getDeals).post(addDeals);
router.route('/:id').get(getDeal);

module.exports = router;