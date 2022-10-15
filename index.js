const express = require('express');
const app = express();
const port = 4000;
const db = require('./config/mongoose');


app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server');
    }else{
        console.log(`Server Up and running on port: ${port}`);
    }
})