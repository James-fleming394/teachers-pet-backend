const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const projectSchema = new Schema(
    {
        subject: { type: String, required: true },
        plan: { type: String, required: true },
        img: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
)

const Project = mongoose.model('project', projectSchema);

module.exports = Project;