const mongoose = require("mongoose");
const slugify = require("slugify");
//const geocoder = require('../utils/geocoder');

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a shop name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name can not be more than 50 characters"],
    },
    shop_photo: {
        type: String,
        default: "no-photo.jpg",
    },
    slug: String,
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description can not be more than 500 characters"],
    },
    owner_name: {
        type: String,
        required: [true, "Please add owners name"],
        trim: true,
        maxlength: [50, "Name can not be more than 50 characters"],
    },
    phone: {
        type: Number,
        match: [/^\d{12}$/, "Please add a valid phone number"],
        maxlength: [10, "Phone number can not be longer than 10 characters"],
    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
    },
    address: {
        type: String,
        required: [true, "Please add an address"],
    },
    documents: {
        type: String,
        default: "no-photo.jpg",
    },
    product_category: {
        // Array of strings
        type: [String],
        required: [true, "Please add a product category"],
    },
    shop_category: {
        // Array of strings
        type: [String],
        required: [true, "Please add a shop category"],
        enum: ["Grocery", "Stationary", "Bakery", "Food", "Services"],
    },
    service: {
        // Array of strings
        type: [String],
        required: [true, "Please choose delivery/Take-away"],
        enum: ["Delivery", "Takeaway"],
    },
    status: {
        type: Boolean,
        required: [true],
        default: false,
    },
    shop_rating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating must can not be more than 5"],
    },
    shop_reviews: {
        type: String,
        maxlength: [100, "Reviews can not be longer than 100 characters"],
    },
    location: {
        // GeoJSON Point
        type: {
            type: String,
            enum: ["Point"],
        },
        coordinates: {
            type: [Number],
            index: "2dsphere",
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

ShopSchema.pre("save", function(next) {
    //console.log('Slugify ran', this.name);
    this.slug = slugify(this.name, { lower: true });
    next();
});

// Cascade delete courses when a bootcamp is deleted
ShopSchema.pre('remove', async function(next) {
    //console.log(`Products being removed from bootcamp ${this._id}`);
    await this.model('Product').deleteMany({ shop: this._id });
    next();
});

//Reverse populate with virtuals
/*ShopSchema.virtual('Products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'shop',
    justOne: false
});*/

module.exports = mongoose.model("Shops", ShopSchema);