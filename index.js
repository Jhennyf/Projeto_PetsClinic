const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

db.sync().then(()=> {
  app.listen(PORT)
}).catch((err)=> {
  console.log("error", err)
})

 app.use('/pet', require('./routes/petsRoutes'))

 app.use('/tutors', require('./routes/tutorsRoutes'))