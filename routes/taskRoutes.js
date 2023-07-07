const express = require('express');
const controller = require('../controllers/TaskController');

const router = express.Router();

router.get('/', controller.showTasks);

router.get('/add', controller.createTask);
router.post('/add', controller.createTaskSave);

router.post('/remove', controller.removeTask);

router.get('/edit/:id', controller.editTask);
router.post('/edit/', controller.editTaskSave);

router.post('/updatestatus', controller.editTaskStatus);

module.exports = router;