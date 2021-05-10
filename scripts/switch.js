let premiado = false;
let edad = 68;

switch (premiado) {
    case true:
        console.log("Ha sido premiado");
        break;
    case false: 
        console.log("No ha sido premiado");
        break;
}

switch(edad) {
    case (edad < 18):
        console.log('Eres menor de edad');
        break;
    case (edad > 65):
        console.log('Tienes más de la edad permitida');
        break;
    default:
        console.log('Edad no permitida');
}

console.log('Aquí va el resto del programa');