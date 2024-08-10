const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

//body parser

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

db.sync().then(()=> {
  app.listen(PORT)
}).catch((err)=> {
  console.log("error", err)
})


// // Rotas Pets 
 app.use('/pet', require('./routes/petsRoutes'))

// // Rotas tutors
 app.use('/tutors', require('./routes/tutorsRoutes'))

