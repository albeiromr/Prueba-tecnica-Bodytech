import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Song from "../song/Song";

const SongsContainer = () => {

    return (
        <div className="songs-container">
            <Song 
            title={"Complete song title"}
            artist={"Artist´s name"}
            key={"A1"}
            />
        </div>
    )
}

export default SongsContainer;