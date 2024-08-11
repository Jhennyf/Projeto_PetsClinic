const express = require("express");
const router = express.Router();
const tutorcontroller = require('../controller/TutorController');


router.post("/tutor", tutorcontroller.createTutor); 
router.get("/tutors", tutorcontroller.listTutors); 
router.put("/tutor/:id", tutorcontroller.updateTutor); 
router.delete("/tutor/:id", tutorcontroller.deleteTutor);


module.exports = router;
