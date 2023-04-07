const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const quizSchema = new Schema(
    {
        subject: { type: String, required: true },
        unit: { type: String, required: true },
        question: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
)

const Quiz = mongoose.model('quiz', quizSchema);

module.exports = Quiz;