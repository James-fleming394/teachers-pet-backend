const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const LessonSchema = new Schema(
    {
        subject: { type: String, required: true },
        plan: { type: String, required: true },
        img: { type: String, required: true },
        date: { type: String, required: true },
    }
    { timestamps: true }
)

module.exports = mongoose.model("Lesson": LessonSchema);