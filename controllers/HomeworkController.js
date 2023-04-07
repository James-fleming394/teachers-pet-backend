const Homework = require("../models/Homework");

// Homework

const getAllHomework = async (req, res) => {
    try {
        const allHomework = await Homework.find()

        res.json({allHomework});
    } catch (err) {
        res.status(500).json(err);
    }
}

const getHomeworkById = async (req, res) => {
    try {
        const { id } = req.params;
        const homework = await Homework.findById(id);
        if (homework) {
            return res.status(200).json({ homework })
        }
        return res.status(400).send("No Homework Found")
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createHomework = async (req, res) => {
    try {
        const homework = await Homework.create(req.body)
        res.send(homework);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateHomework = async (req, res) => {
    try {
        const homework = await Homework.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(homework)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteHomework = async (req, res) => {
    try {
        const { id } = req.params
        const deletedHomework = await Homework.findByIdAndDelete(id)
        if (deletedHomework) {
            return res.status(200).send('Homework deleted')
        }
        throw new Error('Homework not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllHomework,
    getHomeworkById
    createHomework,
    updateHomework,
    deleteHomework
}