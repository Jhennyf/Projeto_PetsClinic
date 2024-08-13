const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
const swaggerUi = require ('swagger-ui-express');
const swagger = require ('./swagger.json');


const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

db
.sync()
.then(()=> {
  app.listen(PORT)
}).catch((err)=> {
  console.log("error", err)
})

 app.use('/', require('./routes/petsRoutes'));

 app.use('/', require('./routes/tutorsRoutes'));