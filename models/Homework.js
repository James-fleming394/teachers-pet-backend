const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const homeworkSchema = new Schema(
    {
        subject: { type: String, required: true },
        unit: { type: String, required: true },
        work: { type: String, required: true },
        goal: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
)

const Homework = mongoose.model('homework', homeworkSchema);

module.exports = Homework;