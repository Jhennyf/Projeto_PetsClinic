const express = require("express");
const router = express.Router();
const tutorcontroller = require('../controller/TutorController');



router.get("/test", (req, res) => {
  res.send("Deu certo!");
});


router.post("/tutor", tutorcontroller.createTutor);
router.get("/tutors", tutorcontroller.listaTutors);
router.put("/tutor/:id", tutorcontroller.atualizarTutor);
router.delete("/tutor/:id", tutorcontroller.excluirTutor);


module.exports = router;
