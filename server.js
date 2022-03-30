const express = require('express');
const app = express();
const port = process.env.POST||3500;
const bodyParser = require('body-parser');
const { json } = require('express/lib/response');
const routes = require('./settings/routes');
const cors = require('cors');

app.use(
   cors({
      origin:'http://localhost:3000',
      methods:['GET','POST'],
      credentials:true

      
   })
)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
routes(app)

app.listen(port, () =>{
   console.log(`App listen port ${port}`) 
})

