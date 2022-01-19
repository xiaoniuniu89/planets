const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController')


//routes for planets 

// mercury 
router.get('/mercury', planetController.mercury)

// venus 
router.get('/venus', planetController.venus)

//earth 
router.get('/earth', planetController.earth)

//mars 
router.get('/mars', planetController.mars)

//jupiter 
router.get('/jupiter', planetController.jupiter)

//saturn 
router.get('/saturn', planetController.saturn)

//uranus
router.get('/uranus', planetController.uranus)

//neptune
router.get('/neptune', planetController.neptune)




module.exports = router;
