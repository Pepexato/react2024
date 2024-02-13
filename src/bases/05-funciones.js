const saludar = function(nombre){

    return `Hola, ${nombre}`;
}

const saludar2 = (nombre)=>{

    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`

console.log(saludar("Goku"));
console.log(saludar2("Vegeta"));
console.log(saludar3("Fergeta"));

const getUser = () =>{

    return{
        id:'ABC123',
        username: 'Papito'
    }
};
const user = getUser();
console.log(user.username);



const getUsuarioActivo = ( nombre ) => (

     {
        id:'ABC123',
        username: nombre,
    }
);

const usuarioActivo = getUsuarioActivo('Fernadno');
console.log(usuarioActivo.username)