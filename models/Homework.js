const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const HomeworkSchema = new Schema(
    {
        subject: { type: String, required: true },
        plan: { type: String, required: true },
        img: { type: String, required: true },
        date: { type: String, required: true },
    }
    { timestamps: true }
)

module.exports = mongoose.model("Homework": HomeworkSchema);