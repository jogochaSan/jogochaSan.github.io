function cambiarFormato(cadena, formato) {
    return formato(cadena);
}

function mayus(cadena) {
    return cadena.toUpperCase();
}

function minus(cadena) {
    return cadena.toLowerCase();
}

console.log(cambiarFormato('PejeLagarto', mayus));
console.log(cambiarFormato('PejeLagarto', minus));