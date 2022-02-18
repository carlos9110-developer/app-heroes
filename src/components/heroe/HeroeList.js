
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const  HeroeList = ({publisher}) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes(publisher) ){
        throw new Error(  ` ${publisher} is not a valid publisher ` );
    }

     // memorizamos este valor para que solo se vuelva a ejecutar ccuando cambie el heroId, ya que si lo hacemos si utilizamos un useState en este componente cada que lo usemos se volvera a ejecutar esta linea
    const heroes =  useMemo( () => getHeroesByPublisher(publisher), [publisher]);
    
    return(
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>

            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id} 
                        {...hero}
                    />
                ))
            }

        </div>
    );

}


