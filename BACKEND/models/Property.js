const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the room category schema
const roomCategorySchema = new Schema({
    category: {
        type: String,
        required: true
    },
    charges: {
        type: Number,
        required: true
    }
}, { _id: false }); // Prevent _id creation for room categories

// Define the property schema
const propertySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    chargePerHead: {
        type: Number,
        required: true
    },
    winterCharge: {
        type: Number,
        required: true
    },
    summerCharge: {
        type: Number,
        required: true
    },
    adult2Sup: {
        type: Number,
        required: true
    },
    adult3Sup: {
        type: Number,
        required: true
    },
    minAgeFoc: {
        type: Number,
        required: true
    },
    maxAgeFoc: {
        type: Number,
        required: true
    },
    minAgeChargable: {
        type: Number,
        required: true
    },
    maxAgeChargable: {
        type: Number,
        required: true
    },
    childSup: {
        type: Number,
        required: true
    },
    breakSup: {
        type: Number,
        required: true
    },
    lunSup: {
        type: Number,
        required: true
    },
    dinSup: {
        type: Number,
        required: true
    },
    roomCategories: [roomCategorySchema], // Array of room categories
    imageUrls: [String], // Array to store image URLs
    searchCount: { type: Number, default: 0 },  // Tracks the number of searches
    lastSearched: { type: Date }  // Tracks the last search date
});

// Create the Property model
const Property = mongoose.model('Property', propertySchema);

// Export the model
module.exports = Property;
