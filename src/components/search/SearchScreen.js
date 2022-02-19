import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroe/HeroCard';

import queryString from 'query-string';

export const  SearchScreen= () => {


    const navigate  = useNavigate();
    const location  = useLocation();


    const  {q:query = ''} = queryString.parse( location.search );

    
    const  [ formValues, handleInputChange ] = useForm({
        searchText: query
    });

    const {searchText} = formValues;

    const   heroesFiltrados =  useMemo( () => getHeroesByName(query), [query]);

    const handleSearch  =   (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`) 
    }

    return (
        <>

            <div className='row'>

                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>

                        <input 
                            type="text"
                            placeholder='Buscar un héroe'
                            className='form-control'
                            name="searchText"
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={ searchText }
                        />

                        <div className="d-grid mt-1">
                            <button
                                type='submit'
                                className='btn btn-outline-primary'
                            >
                                Buscar...

                            </button>
                        </div>

                    

                    </form>


                </div>


                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (query === '') 
                        ? <div className='alert alert-info'>Buscar un héroe</div>
                        : ( heroesFiltrados.length === 0 ) && <div className='alert alert-danger'>No hay resultados: {query}</div>
                    }

                    {
                        heroesFiltrados.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }


                </div>


            </div>


        </>
    )
}

