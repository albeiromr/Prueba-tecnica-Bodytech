import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Song from "../song/Song";
import {useHistory} from "react-router-dom";

const SongCard = () => {

   const history = useHistory()

   const handleClick = () => {
    history.push("/");
   }

    return (
        <article className="song-card">
            <div className="song-card__cover"></div>
            <div className="song-card__info-container">

                <div className="song-card__info-container-block">
                    <p className="song-card__lable">Artist</p>
                    <p className="song-card__text">Artist's name</p>
                </div>

                <div className="song-card__info-container-block">
                    <p className="song-card__lable">Artist</p>
                    <p className="song-card__text">Artist's name</p>
                </div>

                <div className="song-card__info-container-block">
                    <p className="song-card__lable">Artist</p>
                    <p className="song-card__text">Artist's name</p>
                </div>
            </div>
            <button onClick={handleClick} className="song-card__button">Back to results</button>
        </article>
    )
}

export default SongCard;