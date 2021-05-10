function funcion1() {
    let miVariable = 1;

    function funcionInterna() {
        console.log(miVariable)
    }

    return funcionInterna;
}

let variableExterna = funcion1();
variableExterna();

console.log(funcion1());
console.log(variableExterna);

/* ------------ */

function funcion2() {
    let miVariable = 2;

    function funcionInterna() {
        console.log(miVariable);
    }

    funcionExterna(funcionInterna);

}

function funcionExterna(funcion) {
    funcion();
}

funcion2();

/* ------------ */

function esperar(mensaje) {
    /* setTimeout(function() {
        console.log(mensaje);
    }, 3000) */

    setTimeout(() => {
        console.log(mensaje)
    }, 3000);
}

esperar('Hola desde DOPodcast');