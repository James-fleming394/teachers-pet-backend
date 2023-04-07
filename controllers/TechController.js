const Tech = require("../models/Tech");

// Tech

const getAllTech = async (req, res) => {
    try {
        const allTech = await Tech.find()

        res.json({allTech});
    } catch (err) {
        res.status(500).json(err);
    }
}

const getTechById = async (req, res) => {
    try {
        const { id } = req.params;
        const tech = await Tech.findById(id);
        if (tech) {
            return res.status(200).json({ tech })
        }
        return res.status(400).send("No Tech Found")
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createTech = async (req, res) => {
    try {
        const tech = await Tech.create(req.body)
        res.send(tech);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateTech = async (req, res) => {
    try {
        const tech = await Tech.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(tech)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteTech = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTech = await Tech.findByIdAndDelete(id)
        if (deletedTech) {
            return res.status(200).send('Tech deleted')
        }
        throw new Error('Test not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTech,
    getTechById,
    createTech,
    updateTech,
    deleteTech
}