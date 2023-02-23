import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";

const GenerationVIContainer = () => {

    const [pokemon, setPokemon] = useState([]);

    const allPromises = [];
    for (let i = 650; i < 722 ; i++) {
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
    
export default GenerationVIContainer;