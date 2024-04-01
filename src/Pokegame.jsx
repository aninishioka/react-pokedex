import { createTwoHands } from "./helper";
import Pokedex from './Pokedex'

const POKEMONS = [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ];

/** Takes a list of 8 pokemon and random assign them into 2 hands of 4 cards each.
 * Render a Pokedex component for each hand.
 *
 * Props: Pokemons -- an array of 8 pokemon
 * Parent: App
 * Children: Pokedex
 */
function Pokegame({pokemons=POKEMONS}) {
    const [hand1, hand2] = createTwoHands(pokemons);
    const hand1Exp = hand1.reduce((total, p) => total + p.base_experience, 0);
    const hand2Exp = hand2.reduce((total, p) => total + p.base_experience, 0);

    return (
        <div>
            <Pokedex pokemons={hand1} totalExp={hand1Exp} isWinner={hand1Exp > hand2Exp} />
            <Pokedex pokemons={hand2} totalExp={hand2Exp} isWinner={hand2Exp > hand1Exp}/>
        </div>
    )
}

export default Pokegame;