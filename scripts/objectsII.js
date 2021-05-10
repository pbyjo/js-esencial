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

    let matriz = ['a', 'b', 'c', 'd', 'e'];
        console.log(typeof matriz)