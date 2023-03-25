import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import HomeContainer from "./HomeContainer";
import GenerationIIContainer from "./GenerationIIContainer";
import GenerationIIIContainer from "./GenerationIIIContainer";
import GenerationIVContainer from "./GenerationIVContainer";
import GenerationVContainer from "./GenerationVContainer";
import GenerationVIContainer from "./GenerationVIContainer";
import GenerationVIIContainer from "./GenerationVIIContainer";
import GenerationVIIIContainer from "./GenerationVIIIContainer";
import WhosThatContainer from "./WhosThatContainer";

const PokemonContainer = () => {

    // console.log(pokemon);

    //     .then(function handleData)

    return (  
        <BrowserRouter>
            <div className="App">
                <h1>Pok&eacute;Dex</h1>
                {/* {pokemon.map((singlePokemon => <p>{singlePokemon.name}</p>))} */}
                <ul className="nav-bar">
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/">Generation I</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/generation-II">Generation II</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/generation-III">Generation III</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/generation-IV">Generation IV</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/generation-V">Generation V</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/generation-VI">Generation VI</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/generation-VII">Generation VII</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/generation-VIII">Generation VIII</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'inherit'}} className="link" to="/whos-that-pokemon">Who's That Pok&eacute;mon?</Link></li>

                </ul>
            </div>
            <Routes>
                <Route path="/" element={<HomeContainer/>} />
                <Route path="/generation-II" element={<GenerationIIContainer />} />
                <Route path="/generation-III" element={<GenerationIIIContainer />} />
                <Route path="/generation-IV" element={<GenerationIVContainer />} />
                <Route path="/generation-V" element={<GenerationVContainer />} />
                <Route path="/generation-VI" element={<GenerationVIContainer />} />
                <Route path="/generation-VII" element={<GenerationVIIContainer />} />
                <Route path="/generation-VIII" element={<GenerationVIIIContainer />} />
                <Route path="/whos-that-pokemon" element={<WhosThatContainer />} />
                {/* <Route path="/type" element={<TypeContainer/>} /> */}
                {/* <Route path="/ability" element={<AbilityContainer/>} /> */}
                {/* <Route path="/colour" element={<ColourContainer/>} /> */}
                {/* <Route path="/whosthatpokemon" element={<WhosThatContainer/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}
 
export default PokemonContainer;