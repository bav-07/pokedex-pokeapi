import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";


const HomeContainer = () => {
    
    // const handleChange = (event) => {
    //     let pokemonName = event.target.value;
    //     const filteredPokemon = pokemon.filter((singlePokemon) => (singlePokemon.species.name).replaceAll("-"," ") === pokemonName)
    //     setPokemon(filteredPokemon)
    // }
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const input = event.target.pokemonName.value.toLowerCase();
    //     const filteredPokemon = pokemon.filter((singlePokemon) => (singlePokemon.species.name).replaceAll("-"," ") === input)
    //     setPokemon(filteredPokemon);
    // }
    // const imageSrc = pokemon.sprites.other["official-artwork"]["front_default"]

    const [pokemon, setPokemon] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {

    //         for (let i = 1 ; i < 10 ; i++) {
    //             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    //             const data = await response.json();
    //             setPokemon([...pokemon, data]);
    //         }        
    //     }
    //     fetchData()
    // }, [])

    const allPromises = [];
    for (let i = 1; i < 152 ; i++) {
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
        <>
            {/* <div>
                <h2>Welcome to the Pok&eacute;Dex</h2>
                <p>Follow the above links to search the Pok&eacute;Dex via your desired parameters</p>
                <p>Or search by name via the form</p>
            </div>
            <form >
                <input 
                    type="text" 
                    placeholder="Pok&eacute;mon name..."
                    name="pokemonName"
                    // onChange={handleChange}
                     />
            </form> */}
            <PokemonList pokemon={pokemon}/>
        </>
        
    );
}
 
export default HomeContainer;