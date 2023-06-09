const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const lessonSchema = new Schema(
    {
        subject: { type: String, required: true },
        unit: { type: String, required: true },
        topic: { type: String, required: true },
        plan: { type: String, required: true },
        closing: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
)

const Lesson = mongoose.model('lesson', lessonSchema);

module.exports = Lesson;