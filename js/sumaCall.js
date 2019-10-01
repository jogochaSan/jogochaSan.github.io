function operacion(num1, num2, ejecutar) {
    return ejecutar(num1, num2);
}

function suma(num1, num2) {
    return num1 + num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

console.log(operacion(5, 8, suma));
console.log(operacion(10, 2, division));
console.log(operacion(7, 4, rest));
console.log(operacion(5, 8, suma));


hjhkhkh