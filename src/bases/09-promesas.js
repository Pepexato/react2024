import { getHeroeById } from "./bases/08-exports";
import { getHeroeByOwner } from "./bases/08-exports";

// const promesa = new Promise( (resolve,reject) => {

//     setTimeout( () => {
//         const heroe = getHeroeById(2)
        
//         resolve(heroe);
//     }, 2000)
// }  );

// promesa.then( (hero) => {
//     console.log('Mi heroes es:',hero)
// })
// .catch( err => console.warn(err));

const  getHeroeByIdAsync = (id) => {
    return new Promise( (resolve,reject) => {

        setTimeout( () => {
            const heroe = getHeroeById(id)
            if (heroe)
            {
                resolve(heroe);
            }
            else
            reject('No se encuentra el heroe');
        }, 2000)
    }  );
}
getHeroeByIdAsync(5)
.then( console.log)
.catch(console.warn);

