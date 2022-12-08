const path = require('path');
const express = require('express')
require('dotenv').config()
const routes  = require('./routes/openaiRoutes')
const port = process.env.PORT || 5000;

const app = express();

//enable body parser

app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.use('/openai',routes)

app.listen(port,()=>{
    console.log(`Server running`);
})