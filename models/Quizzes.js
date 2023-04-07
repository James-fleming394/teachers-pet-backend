const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const QuizSchema = new Schema(
    {
        subject: { type: String, required: true },
        unit: { type: String, required: true },
        question: { type: String, required: true },
        date: { type: String, required: true },
    }
    { timestamps: true }
)

module.exports = mongoose.model("Quiz": QuizSchema);