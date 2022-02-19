import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroByid';


export const  HeroeScreen = () => {

    const {heroeId}    = useParams(); // este hook de react-router-dom me devuelve un objeto con la ruta complea y sus parametros en varias propiedades

    // memorizamos este valor para que solo se vuelva a ejecutar ccuando cambie el heroId, ya que si lo hacemos si utilizamos un useState en este componente cada que lo usemos se volvera a ejecutar esta linea
    const hero =  useMemo( () =>  getHeroeById(heroeId), [heroeId]  ); 

    const navigate = useNavigate();


    const handleReturn = () => {
        navigate( -1 );
    }

    if(hero === undefined){
        return <Navigate  to="/" />
    }

    const {
        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imgPath   =   `http://pruebacarlos.890m.com/img/${id}.jpg`;

    console.log(hero);

    return (
        <div className='row mt-5'>
           
           <div className='col-4'>
                <img 
                    src={imgPath} 
                    alt={superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
           </div>

            <div className='col-8'>
                
                <h3> {superhero} </h3>
                <ul className='list-group'>
                    <li className='list-group-item'> <b>Alter ego:</b> {alter_ego} </li>
                    <li className='list-group-item'> <b>Publisher:</b> {publisher} </li>
                    <li className='list-group-item'> <b>First Appearance:</b> {first_appearance} </li>
                </ul>

                <h5 className='mt-3'> Characters </h5>
                <p> {characters} </p>

                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Regresar
                </button>

            </div>  


        </div>
    )
}

