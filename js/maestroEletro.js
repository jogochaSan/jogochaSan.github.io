class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    calcularPromedio() {

        let sumaTotal = 0;

        for (let i = 0; i < this.calificaciones.length; i++) {
            sumaTotal += this.calificaciones[i];
        }

        return (sumaTotal / this.calificaciones.length);
    }
}

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

const profe_1 = new MaestroDeFisica('fisica', [7, 3, 2, 5, 6, 7, 8, 9, 1], 8);
const profe_2 = new MaestroDeMusica('musica', [2, 6, 3, 1, 9, 4, 5, 2, 9], 2);

console.log(profe_1.calcularPromedio());
console.log(profe_2.calcularPromedio());


class Electrodomestico {
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }

    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }

    setConsumoEnergetico(precio) {
        this.consumoEnergetico = precio;
    }
}

class lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga) {
        super(precio, color, capacidad);
        this.carga = carga;
    }
    precioFinal() {
        return 'Gasto total: $' + this.getConsumoEnergetico() * this.carga;

    }
}

const lavadora = new Lavadora(7800, 'blanco', 20, 6);
lavadora.setConsumoEnergetico(100);
console.log(lavadora.precioFinal());