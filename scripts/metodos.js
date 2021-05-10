let persona = {
    nombre: 'Joel',
    edad: '26',
    ocupación: 'Web dev',
    color: 'Amarillo',
    ciudad: 'Valencia',

    caminar: function() {
        console.log('estoy caminando');
    },

    saludar: function() {
        console.log(`Hola xoxo, me llamo ${this.nombre}`);

        var funcion = function() {
            console.log(this.nombre);
        }//.bind(this);

        funcion()
    }
};

let persona_two = persona.saludar;
// persona_two() no existe contexto. this name en el ámbito global no existe lo cual es undefined
persona.saludar();

