const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const testSchema = new Schema(
    {
        subject: { type: String, required: true },
        unit: { type: String, required: true },
        question: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
)

const Test = mongoose.model('test', testSchema);

module.exports = Test;