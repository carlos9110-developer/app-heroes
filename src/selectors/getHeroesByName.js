

import { heroes } from '../data/heroes'

export const  getHeroesByName = ( name = '' ) => {

    console.log('get heroes by name')

    if( name==='' ){
        return [];
    }
    
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name.toLowerCase()) )

}
