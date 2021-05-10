let dias = ['L', 'M', 'MI', 'J', 'V', 'S', 'D'];

let primerElemento = dias.shift();
    // Eliminamos el primer elemento de nuestra matriz
    console.log(primerElemento);

let ultimoElemento = dias.pop();
    // Eliminamos el último elemento de nuestra matriz
    console.log(ultimoElemento);

let empujar = dias.push('Z');
    // Agregar un nuevo elemento al final del arreglo de nuestra matriz.
    console.log(empujar);

console.log(dias);

/* --------- . --------- */

let meses = ['E', 'F', 'M', 'A', 'M', 'J'];
    console.log(meses)

meses.splice(1, 1);
    // Eliminamos Febrero
    console.log(meses);

meses.splice(1, 0, 'F')
    //añadimos Febrero
    console.log(meses);

meses.splice(6, 0, 'JL')
    //Añadimos Julio despuesde Junio
    console.log(meses);

meses.splice(6, 1, 'AG');
    //Eliminamos Julio y lo reemplazamos por agosto

console.log(meses);