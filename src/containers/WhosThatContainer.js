import { useEffect, useState } from "react";

const WhosThatContainer = () => {
    
    const [dexId, setDexId] = useState(0);
    const [pokemonData, setPokemonData] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [correct, setCorrect] = useState(false);
    const [found, setFound] = useState(false);

    const handleClick = ((event) => {
        const fetchData = async() => {
            setDexId(Math.floor(Math.random() * 905) + 1);

            setCorrect(false);

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${dexId}`);
            const jsonData = await response.json();
            // console.log(jsonData);

            setImageSrc(jsonData.sprites.other["official-artwork"]["front_default"]);

            const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${dexId}`)
            const jsonData2 = await response2.json();

            setPokemonData(jsonData2.name.replace("-"," "));

            setFound(false);

            // image.classList.add("notFound");        
        }
        fetchData()
    })

    const handleSubmit = ((event) => {
        event.preventDefault();
        const input = event.target.input.value.toLowerCase();
        console.log(input)
        if (input !== "") {
            if (input === pokemonData){
                console.log("correct");
                setCorrect(true);
                setTimeout(function() {
                    setFound(true);
                    handleClick();
                }, 1500);
            }
            else {
                console.log("wrong")
            }
        }
        event.target.input.value = null;
    })

    console.log(pokemonData);
    
    return (  
        <div className="whosThat">
            <img id="logo" src="/logo.png" alt="Logo for Who's That Pokemon"/>
            <button id="generate" onClick={handleClick}></button>
            <img id="pokemon-image" src={`${imageSrc}`} className={(correct ? "" : "imgFalse")} />
            <form onSubmit={handleSubmit}>
                <input type="text" name="input"/>
            </form>
        </div>
    );
}
 
export default WhosThatContainer;