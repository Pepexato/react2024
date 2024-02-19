//Desestructuración de objetos

const persona = {

    nombre:'Eric',
    edad:19,
    clave:'Ironman',
    rango:'Soldad'
}


//const {clave,edad,nombre} = persona



const retornaPersona = function({edad,clave,rango='Private'}) {

    return{

        nombreClave:clave,
        anios:edad,
        latlng: {
            lat:14231,
            lng:12312
        }

    }
}

const { nombreClave,anios,latlng:{lat,lng}} = retornaPersona( persona )

//const avenger = retornaPersona(persona)
console.log(nombreClave)
console.log(anios)
console.log(lat)
console.log(lng)