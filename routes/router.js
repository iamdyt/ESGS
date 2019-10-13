const express = require('express');
const router = express.Router();
const HomeController = require('../controllers');
const DiagnosisController = require('../controllers/Diagnosis');
const AppointmentController = require('../controllers/Appointment')
const AdminController = require('../controllers/Administrator');
const DashboardController = require('../controllers/Dashboard');

router.get('/',HomeController.index);
router.get('/diagnoseme', DiagnosisController.index );
router.post('/diagnoseme',DiagnosisController.diagnose);
router.get('/appointment', AppointmentController.index);
router.post('/appointment', AppointmentController.post);
router.get('/admin/register', AdminController.index);
router.post('/admin/register', AdminController.post);
router.get('/admin/login', AdminController.login);
router.post('/admin/login', AdminController.loginpost);
router.get('/admin/dashboard', DashboardController.index);



module.exports = router;