const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const homeworkSchema = new Schema(
    {
        subject: { type: String, required: true },
        plan: { type: String, required: true },
        img: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
)

const Homework = mongoose.model('homework', homeworkSchema);

module.exports = Homework;