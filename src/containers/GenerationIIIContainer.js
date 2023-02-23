import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";

const GenerationIIIContainer = () => {

    const [pokemon, setPokemon] = useState([]);

    const allPromises = [];
    for (let i = 252; i < 387 ; i++) {
        allPromises.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((response) => response.json())
        );
    }
    Promise.all(allPromises)
    .then((allResults) => {
        const allPokemon = allResults.map((result) => result)
        setPokemon(allPokemon);
    })

    return ( 
        <PokemonList pokemon={pokemon}/>

    );
}
    
export default GenerationIIIContainer;