const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const rewardSchema = new Schema(
    {
        subject: { type: String, required: true },
        plan: { type: String, required: true },
        img: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
)

const Reward = mongoose.model('reward', rewardSchema);

module.exports = Reward;