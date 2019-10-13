const express = require('express');
const router = express.Router();
const HomeController = require('../controllers');
const DiagnosisController = require('../controllers/Diagnosis');

router.get('/',HomeController.index);
router.get('/diagnoseme', DiagnosisController.index );
router.post('/diagnoseme',DiagnosisController.diagnose)

module.exports = router;