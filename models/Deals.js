const mongoose = require('mongoose');
const slugify = require('slugify');

const DealSchema = new mongoose.Schema({
    deal_name: {
        type: String,
        trim: true,
        required: [true, 'Please add a Advertisement name']
    },
    slug: String,
    deal_photo: {
        type: String,
        default: "no-photo.jpg",
    },
    deal_description: {
        type: String,
        //required: [true, 'Please add a description']
    },
    discount: {
        type: Number
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

module.exports = mongoose.model('Deals', DealSchema);