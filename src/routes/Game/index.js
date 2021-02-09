import { Switch ,useRouteMatch, Route } from "react-router-dom";
import BoardPage from "./routes/BoardPage";
import FinishPage from "./routes/FinishPage";
import StartPage from "./routes/StartPage";
import React from "react";


const GamePage = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
    );
};

export default GamePage