let algebra = function(a, b) {
    const cuadradoA = a * a;
    const cuadradoB = b * b;
    const sumarCuadrados = cuadradoA + cuadradoB;

    return sumarCuadrados;
}

const sumaDeCuadrados = algebra(123, 453);

console.log(sumaDeCuadrados);

// Podriamos optimizar mas esta fn