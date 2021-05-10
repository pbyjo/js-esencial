/* 

    let user = prompt('Introduce tu nombre de user');

    document.write(user);

    if (user.length > 3 && user.length < 7) {
        alert('Usuario introducido')
    } else {
        alert('Vuelve a introducir un user valido')
    } 

*/

let user = prompt('Introduce tu nombre de user'.trim());

if (user.length > 3 && user.length < 7) {
    let confirmar = confirm(`¿Es ${user} correcto?`)

    if(confirmar) {
        alert('Usuario correcto')
        document.write(user)
    }   else {
            alert('Vuelve a introducir tu nombre de usuario')
        }
}   else {
        alert('No has introducido un usuario valido entre 3 y 7 carácteres')
    } 