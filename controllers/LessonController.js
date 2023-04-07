const Lesson = require("../models/Lessons");

// Lesson

const getAllLesson = async (req, res) => {
    try {
        const allLesson = await Lesson.find()

        res.json({allLesson});
    } catch (err) {
        res.status(500).json(err);
    }
}

const getLessonById = async (req, res) => {
    try {
        const { id } = req.params;
        const lesson = await Lesson.findById(id);
        if (lesson) {
            return res.status(200).json({ lesson })
        }
        return res.status(400).send("No Project Found")
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createLesson = async (req, res) => {
    try {
        const lesson = await Lesson.create(req.body)
        res.send(lesson);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(lesson)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteLesson = async (req, res) => {
    try {
        const { id } = req.params
        const deletedLesson = await Lesson.findByIdAndDelete(id)
        if (deletedLesson) {
            return res.status(200).send('Lesson deleted')
        }
        throw new Error('Lesson not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllLesson,
    getLessonById
    createLesson,
    updateLesson,
    deleteLesson
}