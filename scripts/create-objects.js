let SCII = {
    titulo: 'Starcraft II',
    genero: 'RTS',
    campeon: 'Serral',
    razas: ['Protoss', 'Zerg', 'Terran'],
    version: 'SCII',

    jugar: function() {
        console.log(`jugando al ${this.titulo} con la raza ${this.razas[1]}`)
    }
}

let SCI = Object.create(SCII);
// Creamos un nuevo objeto llamado SCI que usara como prototipo SCII con sus propiedades y métodos.
SCI['versión'] = 'SC1';
console.log(SCI);

console.log(SCII.isPrototypeOf(SCI));
console.log(Object.prototype.isPrototypeOf(SCII));

/* ----------- . ----------- *\
    New
\* ----------- . -----------  */

function CoD() {
    this.titulo = 'Call of Dutty';
    this.genero = 'FPS';

    /* this.jugar = function() {
        console.log(`Estoy jugando a ${this.titulo}`)
    } */
}

CoD.prototype.jugar = function() {
    console.log(`Estoy jugando a ${this.titulo}`)
} // este será un método del proto de IW

let IW = new CoD();
IW['versión'] = 'Infinite Warfare';
console.log(CoD.isPrototypeOf(IW)); //falase
console.log(IW);


