import React from "react";
import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import ContactPage from "./routes/Contact";
import AboutPage from "./routes/About";
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";

import s from './app.module.css'
import cn from 'classnames'
import NotFound from "./routes/NotFound/NotFound";


const App = () => {

    const match = useRouteMatch('/');

    return (
        <Switch>
            <Route path="/404">
                <NotFound />
            </Route>

            <Route>
                <>
                    <MenuHeader title='Pockemon' bgActive={!match.isExact}/>

                    <div className={cn(s.wrap, {[s.isHomePage]: match.isExact})}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/home" exact component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route>
                                <Redirect to="/404"/>
                            </Route>
                        </Switch>
                    </div>

                    <Footer/>
                </>
            </Route>
        </Switch>


    )

}

export default App