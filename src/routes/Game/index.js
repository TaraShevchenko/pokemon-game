import { Switch ,useRouteMatch, Route } from "react-router-dom";
import BoardPage from "./routes/BoardPage";
import FinishPage from "./routes/FinishPage";
import StartPage from "./routes/StartPage";
import React from "react";
import {PokemonContext} from "../../context/pokemonContext";


const GamePage = () => {
    const match = useRouteMatch();
    return (
        <PokemonContext.Provider value={[]}>
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage