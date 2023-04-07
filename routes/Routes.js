const express = require("express");
const router = express.Router();
const controllers = require('../controllers/TestController');
const controller = require('../controllers/TechController');
const control = require('../controllers/RewardController');
const controls = require('../controllers/QuizController');
const controlss = require('../controllers/ProjectController');
const controlsss = require('../controllers/LessonController');
const controlssss = require('../controllers/HomeworkController');

router.get('/', (req, res) => {
    res.send('Root page route functional')
})

// Test

router.get('/tests', controllers.getAllTests)
router.get('/tests/:id', controllers.getTestById)
router.post('/tests', controllers.createTest)
router.put('/tests/:id', controllers.updateTest)
router.delete('/tests/:id', controllers.deleteTest)

// Tech

router.get('/tech', controller.getAllTech)
router.get('/tech/:id', controller.getTechById)
router.post('/tech', controller.createTech)
router.put('/tech/:id', controller.updateTech)
router.delete('/tech/:id', controller.deleteTech)

// Reward

router.get('/reward', control.getAllRewards)
router.get('/reward/:id', control.getRewardById)
router.post('/reward', control.createReward)
router.put('/reward/:id', control.updateReward)
router.delete('/reward/:id', control.deleteReward)

// Quiz

router.get('/quiz', controls.getAllQuiz)
router.get('/quiz/:id', controls.getQuizById)
router.post('/quiz', controls.createQuiz)
router.put('/quiz/:id', controls.updateQuiz)
router.delete('/quiz/:id', controls.deleteQuiz)

// Project

router.get('/project', controlss.getAllProject)
router.get('/project/:id', controlss.getProjectById)
router.post('/project', controlss.createProject)
router.put('/project/:id', controlss.updateProject)
router.delete('/project/:id', controlss.deleteProject)

// Lesson

router.get('/lesson', controlsss.getAllLesson)
router.get('/lesson/:id', controlsss.getLessonById)
router.post('/lesson', controlsss.createLesson)
router.put('/lesson/:id', controlsss.updateLesson)
router.delete('/lesson/:id', controlsss.deleteLesson)

// Homework

router.get('/homework', controlssss.getAllHomework)
router.get('/homework/:id', controlssss.getHomeworkById)
router.post('/homework', controlssss.createHomework)
router.put('/homework/:id', controlssss.updateHomework)
router.delete('/homework/:id', controlssss.deleteHomework)


module.exports = router;