//Clase padre o super clases
class Mascota {
    constructor(patas, nombre) {
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        console.log('Se creo la Mascota');
    }

    getNombre() {
        return this.nombre
    }
}
class Perro extends Mascota {

    constructor(raza, color, nombre) {
        super(4, nombre);
        console.log('Se creo el Perro');
        this.raza = raza;
        this.color = color;
    }

    getRaza() {
        return this.raza
    }
}

const snoopy = new Perro('Beagle', 'Negro y Blanco', 'Snoopy');

console.log(snoopy);