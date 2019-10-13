const express = require('express');
const router = express.Router();
const HomeController = require('../controllers');
const DiagnosisController = require('../controllers/Diagnosis');
const AppointmentController = require('../controllers/Appointment')
const AdminController = require('../controllers/Administrator');
const DashboardController = require('../controllers/Dashboard');
const middleware = require('../middlewares/middlewares');


// Users Routes
router.get('/',HomeController.index);
router.get('/diagnoseme', DiagnosisController.index );
router.post('/diagnoseme',DiagnosisController.diagnose);
router.get('/appointment', AppointmentController.index);
router.post('/appointment', AppointmentController.post);

// Admin Restricted Routes
router.get('/admin/register', middleware.isLoggedIn, AdminController.index);
router.post('/admin/register',middleware.isLoggedIn, AdminController.post);
router.get('/admin/login',middleware.isLoggedIn, AdminController.login);
router.post('/admin/login', middleware.isLoggedIn,AdminController.loginpost);
router.get('/admin/dashboard',middleware.isAdmin, DashboardController.index);
router.get('/admin/dashboard/add',middleware.isAdmin, DashboardController.show);
router.post('/admin/dashboard/add', middleware.isAdmin,DashboardController.store);
router.get('/dashboard/appointment', middleware.isAdmin, DashboardController.appointmentall);
router.get('/dashboard/appointment/:id', middleware.isAdmin, DashboardController.appointmentdelete);
router.get('/dashboard/appointment/:id', middleware.isAdmin, DashboardController.appointmentdelete);
router.get('/admin/dashboard/:id/edit', middleware.isAdmin, DashboardController.sympedit);
router.post('/admin/dashboard/:id/update', middleware.isAdmin, DashboardController.sympupdate);
router.get('/admin/dashboard/:id/delete', middleware.isAdmin, DashboardController.sympdelete);
router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/')
})




module.exports = router;