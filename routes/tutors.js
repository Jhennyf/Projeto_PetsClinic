const express = require("express");
const router = express.Router();
const Tutor = require('../models/Tutor');

//rota de teste
router.get('/test', (req, res) => {
    res.send("Deu certo!");
});

router.post('/tutor', (req, res) =>{ //cria um novo tutor
    let {name, phone, email, date_of_birth, zip_code} = req.body;

    Tutor.create({
        name,
        phone,
        email,
        date_of_birth,
        zip_code
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router