//import { heroes } from '../src/data/heroes';

import { heroes } from './data/heroes';


//METODO FIND
const getHeroeById = (id) => {

    return heroes.find((heroe) => heroe.id === id);  
}

console.log(getHeroeById(1));

//METODO FILTER
const getHeroeByOwner = (owner) => {

    return heroes.filter((heroe) => heroe.owner === owner);  
}

console.log(getHeroeByOwner('DC'))

