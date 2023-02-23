const Pokemon = ({key, pokemon}) => {
    // console.log(pokemon)
    const imgSrc = pokemon.sprites.other["official-artwork"]["front_default"];

    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); 
    
    let pokemonType;
    let pokemonType1;
    let pokemonType2;
    pokemonType1 = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1);

    if (pokemon.types.length === 2) {
        pokemonType2 = pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1);
        pokemonType = pokemonType1 + "/" + pokemonType2
    }
    else {
        pokemonType = pokemonType1
    }

    return ( 
        <div className="pokemonCard" style={{backgroundColor: `${pokemon.colour}`}}>
            <img src={imgSrc} alt={`${pokemonName}`} width="100px"/>
            <div className="textContent">
                <h3>{pokemonName}</h3>
                <p><span className="bold">Type: </span>{pokemonType}</p>
            </div>
        </div>

    );
}
 
export default Pokemon;