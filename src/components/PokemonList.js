import Pokemon from "./Pokemon";

const PokemonList = ({pokemon}) => {

    const pokemonComponents = pokemon.map(singlePokemon => {
        return <Pokemon
                key={singlePokemon.id}
                pokemon={singlePokemon}
                />
    })
    
    return (  
        <div className="pokemonList">
            {pokemonComponents}
        </div>
    );
}
 
export default PokemonList;