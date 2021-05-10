# Javascript Esencial

Esta es una guia con las funcionalidades mas peculiares e importantes a mi entender sobre el lenguaje. Es java script esencial pero partiendo desde conceptos un poquito mas avanzados.
Dejo un archivo por tematica documentado en este Readme :)

### Switch
Sintaxis:
``` js
let edad = 15;

switch(/* parametro o boolean */) {
    case 1
        //action
        break;
    case 2
        break;
    default;
}
```

Importante siempre agregar un break para cada caso. Con esto le decimos a la función que hasta ese punto llega el caso
Tambien podriamos usar datos booleanos o condiciones en los casos

`case (edad > 15)` Ó `Case false:`

### Objetos
`Object literal notation`. Esta es la forma principal de crear un objeto y pedirle valores de sus propiedades con dot operator.
Importante, los objetos se componen por propiedades y valores. Pueden recibir strings, numeros booleans y valores externos mediante variables y constantes y sus propiedades se separan por comas.

Sintaxis:
``` js
    let opinion = 'Es mi libro favorito.'

    const libro = {
        Título: "IT",
        Autor: "Stephen King",
        Genero: "Terror",
        Valoración: 9,
        tags: ["Pennywise", "Floating", "Payaso", "Derry"],
        opinion: opinion,
    }

    console.log(libro.Valoración);
    console.log(libro.tags[2]);
```

Con ello podemos incluir tambien objetos multidimensionales o compuestos, es decir, objetos en cascada.

### Objetos II
Es importante saber que Todo en JS son objetos. Las clases, las matrices o arrays.
Las matrices son objetos simplificados, dado que no existen las propiedades, los valores se listan y amarran a un indice, este indice es su identificador y su tipo de dato es numerico empezando por 0.

sin embargo podemos validar tipos de datos con el metodo typeof que nos indicara que tipo de datos es cierta info.
``` js
let matriz = [a, b, c, d, e];
console.log(typeof matriz)
```

podemos recorrer objetos con un `for in`
``` js
    let opinion = 'Es mi libro favorito.'

        const libro = {
            Título: "IT",
            Autor: "Stephen King",
            Genero: "Terror",
            Valoración: 9,
            tags: ["Pennywise", "Floating", "Payaso", "Derry"],
            opinion: opinion,
        }

        for(let propiedad in libro) {
            console.log(propiedad + ':' + libro[propiedad])
        }
```

### Métodos y this.
Si una **propiedad** es un trozo de información que identifica o define a un objeto, entonces los métodos son acciones de ese objeto o entidad.
``` js
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
```

La forma de llamar un método tambien se vincula con el dot operator a diferencia el parentesis se ubica al terminar para invocar la función.

`this` vincula directamente una propiedad al llamado dentro del **scope local**, es decir dentro del objeto. si yo llamo la variable nombre de manera estandar saldra `undefined`. Porque este la busca en el contexto global.

### Herencia
La herencia es un paradigma, que consiste en reutilizar funciones básicamente. 
Podemos verlo como un plano. Este puede funcionar para construir X cantidad de casas y guardarlo como un prototipo. De aquí el concepto de herencia prototipal.

Las propiedades heredadas por defecto por todos los objetos vienen del padre o núcleo del lenguaje. Un SUPER que define los objetos nativos de JS: Object Prototype. Es el prototipo de mayor nivel.

Importante destacar que existen OTROS prototipos:
    // Object.create() [Object prototype]
        // Array.push() [Array prototype] .push viene de la herencia nativa.
        // String.toUpperCase(); .toUpperCase ya está definido como fn.
        // Number.toFixed() [Number prototype] .toFixed fn nativa.
        // Function.toSource() [Function prototype] .toSource fn nativa.

        Todas estas heredan del object prototype

`.hasOwnProperty` nos permite determinar o saber si un metodo hace parte de un objeto declarado o si es un metodo nativo del objeto super.

Podemos hacer herencia prototipal de la siguiente forma. Es solo una forma demostrativa pues esto es una mala práctica.
``` js
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
```

con esto indicamos que saludar es un método del objeto super, sin embargo con this.nombre le indicamos que todos los objetos tienen un nombre y no deberia. Es una buena forma de visualizar como los objetos declarados heredan el método estipulado en el prototipo del objeto superior, pero solo eso.

### Creación de objetos
Javascript no tiene clases. Esto es importante saberlo porque js emula las clases con objetos.

Existen dos formas de declara un objeto. Literal notation y una forma mas conservadora de hacerlo.
``` js
    let objeto = {}; // literal notation. Sintax sugar. la forma estandar de crear objetos.
    let objeto = Object.create(Object.prototype); 
    /* 
            Una forma mas conservadora de crear objetos aunque me gusta mas 
            porque podemos definir que objeto sera el prototipo de mi nuevo objeto valga la rebundancia.
    */
```

**New**
Cundo se utiliza Object.create() de forma actual el prototipo de ese objeto es el objeto que le pasemos a Object.create(Aquí)

Sin embargo, cuando utilizamos el New como operador con un nuevo objeto, las propiedades y los métodos de esta no se heredan del padre sino que hacen parte de esa nueva fn creada, quiere decir, que las trae y las *copia* de forma intrinseca y deja de tener prototipo. Esto se puede convertir en un problema realmente si no le damos un buen uso, dependiendo del caso que se este trabajando.
``` js
    function CoD() {
        this.titulo = 'Call of Dutty';
        this.genero = 'FPS';

        this.jugar = function() {
            console.log(`Estoy jugando a ${this.titulo}`)
        }
    }

    let IW = new CoD();
    IW['versión'] = 'Infinite Warfare';
    console.log(CoD.isPrototypeOf(IW)); //falase
    console.log(IW);
```

En pocas palabras. `Object.create()` reutiliza esas propiedades y métodos de mi objeto prototipo. Mientras que con New estamos copiando e independizando este nuevo objeto dejandolo así sin obj prototipo.

La primera forma puede optimizar el uso de nuestra app y reutilizar valores declarados.

### Prompt
``` js 
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
```
.trim() es método que eliminar los espacios en nuestro string como variable o constante.

### typeof (Operador)
Nos valida un tipo de dato.
``` js
let name = 'juan';
console.log(typeof(name));

let number = "Cuarenta";

if (typeof number === "string") {
    console.log('Esto es un string');
}   else {
        console.log(`Error, ${number} es un ${typeof(number)}`)
    }
```

### Funciones
Para invocar una funcion siempre tenemos que terminarla en parentesis
``` js
function name () {
    console.log()
}

name();
```

si queremos que una función realice una tarea segun una función esta necesitara un parametro, un dato que entra para obtener un output

``` js
let name = function (n, p) {
    console.log(`Hola ${n} me dedico a ${p}`)
}

name('Juan Alberto', 'Desarrollo web')

let mayusculas = (t) => {
    return t.toUpperCase();
}

let name_two = mayusculas('joel');
console.log(name_two);
```

### return y su importancia
Toda funcion tiene que retornar un resultado, es la forma de expresar nuestro output al scope global. Para ello usamos return.
``` js
    let algebra = function(a, b) {
    const cuadradoA = a * a;
    const cuadradoB = b * b;
    const sumarCuadrados = cuadradoA + cuadradoB;

    return sumarCuadrados;
}

const sumaDeCuadrados = algebra(123, 453);
console.log(sumaDeCuadrados);
// Podriamos optimizar mas esta fn
```

### El ámbito de las variables
Existe un scope global, que es donde interactuamos con el DOM y tenemos un scope local, el scope local se encuentra en las funciones o en los objetos.

todas las variables declaradas en una función no se pueden acceder en el scope global
``` js
let nombrar = function() {
    let nombre = 'Joel'
    return nombre
}

// console.log(nombre); | Nombre es indefinido, no existe en el scope actual(global)
console.log(nombrar())
```

si cambio let nombre = valor por nombre = valor entonces ya que si puedo accederlo en el scope global.

Las unicas estructuras en js que crean ambitos son las funciones

### Expresiones funcionales
Las expresiones funcionales, a diferencia de una funcion declarada se guarda en una variable, al hacer esto cambiamos el ámbito de la misma.

Resulta que las expresiones funcionales son tratadas como eso, como variables y su hoisting cambia, es decir, no tienen un alzado como si lo tienen las funciones declaradas. 
``` js
    function funcionDeclarada() {
        console.log('Esto es una funcion declarada')
    }

    let expresionFuncional = function () {
        console.log('Esto es una expresión funcional')
    }
```

Existe un tipo de fn llamado Inmediately Invoked function expression o IIFE. Estas tiene como caracteristica que se autoinvocan y no son mas que una expresion funcional anonima.
``` js
(function() {
    console.log('Hola desde IIFE')
})()
```

### Clousures
Clousure es una función que retorna desde otra fn. La clave esta en que esa fn que retorna dsde otra fn se lleva una copia o una referencia al ámbito de esa fn que la retorna, es decir closers over.

``` js 
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
```

Esta función nos retorna (return) unicamente lo que le estamos pidiendo, funcionInterna() con el console.log.

Pero sin invocamos directamente variable externa como funcion nos da 1 que es mi variable.

``` js 
function esperar(mensaje) {
    setTimeout(() => {
        console.log(mensaje)
    }, 3000);
}

esperar('Hola desde DOPodcast');
```
setTimeout entiende el mensaje pasado como parametro desde el ámbito global, de adentro hacia afuera busca el mensaje invocado en la declaracion de esperar();

### Métodos de las matrices
Estas son algunos metodos de las matrices, las mas básicas y explicamos minimamente .splice() teniendo en cuenta sus parametros.
``` js
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
```

con .splice() cambia un poco el juego ya que recibew varios parametros además de poder añadir y eliminar al mismo tiempo.
``` js
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
```

### Array indexof
Básicamente indexof es ingeniería inversa, este metodo nos permite saber el indice de un elemento que indiquemos como parametro, y si no existe nos mostrara simplemente el valor de -1

en el siguiente código creamos una funcion que nos elimine un elemento pasado por parametro reutilizando asi el indexof, y si no existe con un else determinamos el mensaje de inexistencia del valor indicado.
``` js
    let colores = ['Rojo', 'Verde', 'Blanco', 'Azul'];
    console.log(colores);
    
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
```

### Recorrer matrices
Para recorrer matrices podemos usar .map()

pero miremos opciones mas 'nativas' para esta funcionalidad.
``` js
    let matriz = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    // for típico
    let longitud = matriz.length,
                    i = 0;
    
    for (i; i < longitud; i++) {
        console.log(matriz[i]);
    }

    // for each
    function mostrarElemento(elemento) {
        console.log(elemento);
    }

    matriz.forEach(mostrarElemento);

    // ES+ for of
    for(let e of matriz) {
        console.log(e);
    }
```




