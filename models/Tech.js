const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const techSchema = new Schema(
    {
        subject: { type: String, required: true },
        plan: { type: String, required: true },
        img: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
)

const Tech = mongoose.model('tech', techSchema);

module.exports = Tech;