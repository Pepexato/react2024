const nombre = "Eric";
const apellido = "Cano";

//const nombreConpleto = nombre + ' '+ apellido


// ${tutexto} agregamos codigo javascript//

const nombreConpleto = ` Hola Mundo ${nombre} ${apellido} `;



console.log(nombreConpleto)

function getSaludo(name) {

    return 'Hola mundo ' + name;
}

console.log(`Este es un texto: ${ getSaludo(nombre)
}`)