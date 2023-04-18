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

router.get('/assessments/tests', controllers.getAllTests)
router.get('/assessments/tests/:id', controllers.getTestById)
router.post('/assessments/tests', controllers.createTest)
router.put('/assessments/tests/:id', controllers.updateTest)
router.delete('/assessments/tests/:id', controllers.deleteTest)

// Tech

router.get('/technology', controller.getAllTech)
router.get('/technology/:id', controller.getTechById)
router.post('/technology', controller.createTech)
router.put('/technology/:id', controller.updateTech)
router.delete('/technology/:id', controller.deleteTech)

// Reward

router.get('/rewards', control.getAllRewards)
router.get('/rewards/:id', control.getRewardById)
router.post('/rewards', control.createReward)
router.put('/rewards/:id', control.updateReward)
router.delete('/rewards/:id', control.deleteReward)

// Quiz

router.get('/assessments/quizzes', controls.getAllQuiz)
router.get('/assessments/quizzes/:id', controls.getQuizById)
router.post('/assessments/quizzes', controls.createQuiz)
router.put('/assessments/quizzes/:id', controls.updateQuiz)
router.delete('/assessments/quizzes/:id', controls.deleteQuiz)

// Project

router.get('/project', controlss.getAllProject)
router.get('/project/:id', controlss.getProjectById)
router.post('/project', controlss.createProject)
router.put('/project/:id', controlss.updateProject)
router.delete('/project/:id', controlss.deleteProject)

// Lesson

router.get('/lessons', controlsss.getAllLesson)
router.get('/lessons/:id', controlsss.getLessonById)
router.post('/lessons', controlsss.createLesson)
router.put('/lessons/:id', controlsss.updateLesson)
router.delete('/lessons/:id', controlsss.deleteLesson)

// Homework

router.get('/homework', controlssss.getAllHomework)
router.get('/homework/:id', controlssss.getHomeworkById)
router.post('/homework', controlssss.createHomework)
router.put('/homework/:id', controlssss.updateHomework)
router.delete('/homework/:id', controlssss.deleteHomework)


module.exports = router;