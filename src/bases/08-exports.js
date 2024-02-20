//import { heroes } from '../src/data/heroes';

import heroes, {owners} from '../data/heroes';

//console.log(owners)


//METODO FIND
export const getHeroeById = (id) => {

    return heroes.find((heroe) => heroe.id === id);  
}

//console.log(getHeroeById(1));

//METODO FILTER
export const getHeroeByOwner = (owner) => {

    return heroes.filter((heroe) => heroe.owner === owner);  
}

//console.log(getHeroeByOwner('DC'))
