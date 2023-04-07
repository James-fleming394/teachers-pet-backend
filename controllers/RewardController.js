const Reward = require("../models/Reward");

// Reward

const getAllRewards = async (req, res) => {
    try {
        const allReward = await Reward.find()

        res.json({allReward});
    } catch (err) {
        res.status(500).json(err);
    }
}

const getRewardById = async (req, res) => {
    try {
        const { id } = req.params;
        const reward = await Reward.findById(id);
        if (reward) {
            return res.status(200).json({ reward })
        }
        return res.status(400).send("No Reward Found")
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createReward = async (req, res) => {
    try {
        const reward = await Reward.create(req.body)
        res.send(reward);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateReward = async (req, res) => {
    try {
        const reward = await Reward.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(reward)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteReward = async (req, res) => {
    try {
        const { id } = req.params
        const deletedReward = await Reward.findByIdAndDelete(id)
        if (deletedReward) {
            return res.status(200).send('Reward deleted')
        }
        throw new Error('Test not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllRewards,
    getRewardById,
    createReward,
    updateReward,
    deleteReward
}