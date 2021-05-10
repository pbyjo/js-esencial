let persona = {
    nombre: 'Joel',
    /* toString: function() {} */
};

//console.log(persona.toString);

console.log(persona.hasOwnProperty('nombre'));
    // True
console.log(persona.hasOwnProperty('toString'));   
    // False

/* ----------------- . ----------------- */

// Anti-pattern. Mla práctica

Object.prototype.saludar = function() {
    console.log(`Hola xoxo, me llamo ${this.nombre}`)
}

let Juan = {
    nombre: 'Juan',
    profesion: 'Dev',
    ciudad: 'Valencia',

    /* saludar: function() {
        console.log(`Hola soy ${this.nombre}`);
    } */
};

let Andres = {
    nombre: 'Andres',
    profesion: 'arte',
    ciudad: 'Madrid',
}

Juan.saludar();
Andres.saludar();
console.log(Andres.hasOwnProperty('saludar'));