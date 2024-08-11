const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
const TutorModel = require('./models/TutorModel');
const PetModel = require('./models/PetModel');

const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

db
.sync()
.then(()=> {
  app.listen(PORT)
}).catch((err)=> {
  console.log("error", err)
})

 app.use('/', require('./routes/petsRoutes'));

 app.use('/', require('./routes/tutorsRoutes'));