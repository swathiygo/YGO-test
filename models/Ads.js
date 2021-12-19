const mongoose = require('mongoose');
const slugify = require('slugify');

const AdSchema = new mongoose.Schema({
    ad_name: {
        type: String,
        trim: true,
        required: [true, 'Please add a Advertisement name']
    },
    slug: String,
    ad_description: {
        type: String,
        //required: [true, 'Please add a description']
    },
    enable: {
        type: Boolean,
        default: false
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Products',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Ads', AdSchema);