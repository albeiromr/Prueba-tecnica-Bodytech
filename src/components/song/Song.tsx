import React, {FC} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import eye from "../../assets/icons/eye.svg"

interface songProps {
    title: string;
    artist: string;
}

const Song:FC<songProps> = (props) => {

    return (
        <article className="song">
            <h2 className="song__title">{props.title}</h2>
            <p className="song__artist">{props.artist}</p>

            <button className="song__button">
                <p className="song__button-text">View</p>
                <img className="song__button-icon" src={eye} alt="eye icon" />
            </button>
            
            <div className="song__line"/>
        </article>
    )
}

export default Song;