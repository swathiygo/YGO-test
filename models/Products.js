const mongoose = require('mongoose');
const slugify = require("slugify");

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true,
        required: [true, 'Please add a product name']
    },
    slug: String,
    price: {
        type: Number,
        required: [true, 'Please add a the price of the product']
    },
    discount: {
        type: Number
    },
    product_photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    product_bio: {
        type: String,
        required: [true, 'Please add a bio for the product']
    },
    product_details: {
        type: String
    },
    product_description: {
        type: String,
        required: [true, 'Please add a description']
    },
    stock: {
        type: Boolean,
        default: false
    },
    product_category: {
        type: String,
        required: [true, 'Please enter the product category']
    },
    replace: {
        type: Boolean,
        default: false
    },
    return: {
        type: Boolean,
        default: false
    },
    product_rating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating must can not be more than 5']
    },
    product_reviews: {
        type: String,
        maxlength: [500, 'Phone number can not be longer than 500 characters']
    },
    shop: {
        type: mongoose.Schema.ObjectId,
        ref: 'Shops',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Call getAverageCost before remove
/*ProductSchema.pre('remove', function() {
this.model('Product').delete({ product: this._id });
next();
}); */

module.exports = mongoose.model('Products', ProductSchema);