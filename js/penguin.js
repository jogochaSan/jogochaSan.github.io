let myPenguin = {
    character: "Penta Penguin",
    origin: "Crash Bandicoot",
    notes: "He's based on the penguins in Crash Bandicoot 2: Cortex Strikes Back who walk aimlessly and then take a moment to spin"
};

console.log(`¡Hola, soy un pingüino y mi nombre es     ${myPenguin.character}    !`);

puedeVolar = false;

console.log(puedeVolar);

myPenguin.graznar = () => "kaww kaww!";
console.log(myPenguin.graznar());

myPenguin.saludar = function() {

    return `¡Hola, soy un pingüino ${this.character} !`
}
console.log(myPenguin.saludar());