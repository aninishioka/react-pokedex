import './Pokecard.css'

const POKEAPI_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/.';

// TODO: add parent, children in docstring
/** Card showing information about a single Pokemon.
 * Props: object describing a pokemon.
 */
function Pokecard({pokemon}) {
    return (
        <div className="Pokecard">
            <h2>{pokemon.name}</h2>
            <img src={`${POKEAPI_BASE_URL}/${pokemon.id}.png`}/>
            <p>Type: {pokemon.type}</p>
            <p>EXP: {pokemon.base_experience}</p>
        </div>
    )
}

export default Pokecard;