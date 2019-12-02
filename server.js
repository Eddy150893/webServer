const express = require('express');
const app = express();
//Requerir hbs
const hbs = require('hbs');
//Esto es un middleware
app.use(express.static(__dirname + '/public'));
//Epress HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    //Separamos la cadena y la convertimos a arreglo
    //recibe como parametro el caracter de separacion en este caso un espacio
    let palabras = texto.split(' ');
    //Recorremos el arreglo con dos argumentos
    //1. el arreglo
    //2. el nombre de la variable para el indice
    palabras.forEach((palabra, idx) => {
        //Con slice tomamos de la palabra solo los caracteres de la posicion 1 en adelante
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    //Juntar todo el arreglo pero separandolo por un espacio recibido como parametro.
    return palabras.join(' ')
});
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