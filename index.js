const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
const PORT = 3000;


app.listen(PORT, function(){
    console.log("a aplicação está funcionando na porta ", PORT);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false}));

//db connection
db
  .authenticate()
  .then(() => {
    console.log("conectou ao banco com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro inesperado", err);
  });

//routs
app.get('/', function(req, res){
    res.send("rota com express");
});


// Rotas Pets 
app.use('/pet', require('./routes/pet'))

// Rotas tutors
app.use('/tutors', require('./routes/tutors'))

