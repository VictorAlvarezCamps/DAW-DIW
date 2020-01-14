const express = require('express');
const path = require('path');

// MONGO
const bodyParser = require('body-parser');

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

//Iniciamos la app
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log(" * BDD Mongo cargada");
}).catch(err => {
    console.log(" Error en la conexión con la BBDD : ", err);
    process.exit();
});

app.get('/api/', (req, res) => {
    res.json({ "message": "API de MongoFallero" });
});

require('./app/routes/puntuaciones.routes.js')(app);



app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000,() =>{
    console.log(" * Miniserver is Running at 3000");
});