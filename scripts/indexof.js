// Array.prototype.indexof()
let colores = ['Rojo', 'Verde', 'Blanco', 'Azul'];
console.log(colores);

colores.push('Morado');
console.log(colores);

console.log(colores.indexOf('Azul'));
console.log(colores.indexOf('Morado'));
console.log(colores.indexOf('Amarillo'));

function borrarElementoMatriz(elemento, matriz) {

    let indice = matriz.indexOf(elemento);

    if(indice > -1) {
        matriz.splice(indice, 1);

    } else {  
        console.log('No existe')
    }

    return indice
}

console.log(borrarElementoMatriz('Negro', colores));
console.log(borrarElementoMatriz('Azul', colores));
console.log(colores)
