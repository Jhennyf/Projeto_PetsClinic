const express = require("express");
const router = express.Router();
const Pet = require('../models/Pet')

router.get('/testpet', (req, res) => { //TESTA A ROTA
    res.send("Deu Certo!");
});



module.exports = router 