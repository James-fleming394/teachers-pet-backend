const express = require("express");
const router = express.Router();
const controllers = require('../controllers/TestController')
const controller = require('../controllers/TechController')
const control = require('../controllers/RewardController')
const controls = require('../controllers/')

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


module.exports = router;