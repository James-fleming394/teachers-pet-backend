const Quiz = require("../models/Quiz");

// Quiz

const getAllQuiz = async (req, res) => {
    try {
        const allQuiz = await Quiz.find()

        res.json({allQuiz});
    } catch (err) {
        res.status(500).json(err);
    }
}

const getQuizById = async (req, res) => {
    try {
        const { id } = req.params;
        const quiz = await Quiz.findById(id);
        if (quiz) {
            return res.status(200).json({ quiz })
        }
        return res.status(400).send("No Quiz Found")
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.create(req.body)
        res.send(quiz);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(quiz)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteQuiz = async (req, res) => {
    try {
        const { id } = req.params
        const deletedQuiz = await Quiz.findByIdAndDelete(id)
        if (deletedQuiz) {
            return res.status(200).send('Quiz deleted')
        }
        throw new Error('Test not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllQuiz,
    getQuizById
    createQuiz,
    updateQuiz,
    deleteQuiz
}