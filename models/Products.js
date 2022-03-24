import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Products = mongoose.model('Product', ProductsSchema);
module.exports = Products;