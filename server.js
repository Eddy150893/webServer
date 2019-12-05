const express = require('express');
const app = express();
//Requerir hbs
const hbs = require('hbs');
require('./hbs/helpers')
    //Esto es un middleware
app.use(express.static(__dirname + '/public'));
//Epress HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/salida', (req, res) => {
    // res.send('hello world');
    let salida = {
        nombre: 'Eddy',
        edad: 32,
        url: req.url
    }
    res.send(salida);

});
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'eddy paz'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/data', (req, res) => {
    res.send('hello world');
});
app.listen(3000, () => {
    console.log("Escuchando peticiones en el puerto 3000")
})