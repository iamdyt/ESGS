const express = require('express');
const router = express.Router();
const HomeController = require('../controllers');
const DiagnosisController = require('../controllers/Diagnosis');
const AppointmentController = require('../controllers/Appointment')

router.get('/',HomeController.index);
router.get('/diagnoseme', DiagnosisController.index );
router.post('/diagnoseme',DiagnosisController.diagnose);
router.get('/appointment', AppointmentController.index);
router.post('/appointment', AppointmentController.post);

module.exports = router;