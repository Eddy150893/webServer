const hbs = require('hbs');

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