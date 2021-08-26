import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import SongsContainer from '../songs container/SongsContainer';
import InfoContainer from "../info container/InfoContainer";


const MainSection = () => {

    return (
        <main className="main-section">
            {/* <SongsContainer /> */}
            <InfoContainer />
        </main>
    )
};

export default MainSection;