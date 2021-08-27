import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import SongsContainer from '../songs container/SongsContainer';
import InfoContainer from "../info container/InfoContainer";
import { Switch, Route } from 'react-router';


const MainSection = () => {

    return (
        <main className="main-section">
            <Switch >
                <Route path="/" exact component={SongsContainer}/>
                <Route path="/card" exact component={InfoContainer}/>
            </Switch>
        </main>
    )
};

export default MainSection;