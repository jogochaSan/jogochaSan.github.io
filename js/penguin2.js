// let myPenguin = {
//     character: "Tootsie the Penguin",
//     origin: "Donald Duck",
//     notes: "A baby penguin in the classic 1939 cartoon \"Donald's Penguin\"."
// };

// console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`)

// myPenguin.graznar = () => {
//     console.log("kaww kaww")
// }

// myPenguin.saludar = function() {
//     return `Hola, soy un pingüino y mi nombre es ${this.character}`
// }

// // myPenguin.saludar = () => `Hola, soy un pingüino y mi nombre es ${this.character}`


// console.log(myPenguin.saludar());

class Persona {
    constructor(nombre, apellido, edad = 23) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }

    getEdad() {
        return this.edad;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }
}

let Juan = new Persona("Juan", "gon", 22);

console.log(Juan.getNombre());
console.log(Juan.getEdad());


console.log(Juan.getApellido());
Juan.setApellido("Gamboa");
console.log(Juan.getApellido());