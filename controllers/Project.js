const Project = require("../models/Project");

// Quiz

const getAllProject = async (req, res) => {
    try {
        const allProject = await Project.find()

        res.json({allProject});
    } catch (err) {
        res.status(500).json(err);
    }
}

const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id);
        if (project) {
            return res.status(200).json({ project })
        }
        return res.status(400).send("No Project Found")
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body)
        res.send(project);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        return res.status(200).json(project)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        const deletedProject = await Project.findByIdAndDelete(id)
        if (deletedProject) {
            return res.status(200).send('Project deleted')
        }
        throw new Error('Test not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllProject,
    getProjectById
    createProject,
    updateProject,
    deleteProject
}