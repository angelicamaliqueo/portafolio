
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {Context} from '../store/appContext';
import {useContext } from 'react';


function Cardtarjeta(props) {
    const {store, actions} = useContext(Context);

    console.log("Cardtarjeta props", props);

function meGusta (index){
    const pokemon = props.pokemon.filter(fav =>  fav.id === index);
    const name = pokemon[0].name;
    actions.guardarFavoritos(name);




console.log("estas loca");

}


    return (
        props.pokemon.map((pokemon, index) => {
            return (
                <Card className='card'>
                    <Card.Img variant="top" src={pokemon.image} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                            <p>Genero : {pokemon.gender}</p>
                            <p> Estado :{pokemon.status}</p>
                            <p> Especie :{pokemon.species}</p>
                        </Card.Text>
                        <Link to={`/informacion/personajes/${index +1}`} >Ver más</Link>
                        <button onClick={() => meGusta(index +1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" color='red'>
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
                        </button>
                    </Card.Body>
                </Card>
            )
        })


    );

}

export default Cardtarjeta;