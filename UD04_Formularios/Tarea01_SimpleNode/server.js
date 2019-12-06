const express = require('express');
const path = require('path');

//Iniciamos la app
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000,() =>{
    console.log(" * Miniserver is Running at 3000");
});