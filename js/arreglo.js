const mayorQueDosHoras = (arreglo, callback) => {
    return callback(arreglo);
}

function compararHoras(arreglo) {

    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {

        if (arreglo[i] >= 120) {
            nuevoArreglo.push(arreglo[i]);
        }
    }

    return nuevoArreglo;
}

const arregloFinal = mayorQueDosHoras([730, 133, 873, 982, 12, 19], compararHoras);
console.log(arregloFinal);