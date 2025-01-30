import mongoose from "mongoose";

const resortSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Resort = mongoose.model("Resort", resortSchema, "resorts");

export default Resort;