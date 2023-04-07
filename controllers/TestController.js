const Test = require('../models/Test');

//Test

const getAllTests = async (req, res) => {
    try {
        const allTests = await Test.find()
        
        res.json({ allTests })

    } catch (err) {
        res.status(500).json(err);

    }
}

const getTestById = async (req, res) => {
    try {
        const { id } = req.params;
        const test = await Test.findById(id)
    if (test) {
        return res.status(200).json({ test })
    }
    return res.status(404).send('No Test Found!')
    } catch (error) {
    return res.status(500).send(error.message)
    }
}

const createTest = async (req, res) => {
    try {
        const test = await Test.create(req.body)
        res.send(users);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateTest = async (req, res) => {
    try {
        const test = await Test.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(test)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteTest = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTest = await Test.findByIdAndDelete(id)
        if (deletedTest) {
            return res.status(200).send('Test deleted')
        }
        throw new Error('Test not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTests,
    getTestById
    createTest,
    updateTest,
    deleteTest
}