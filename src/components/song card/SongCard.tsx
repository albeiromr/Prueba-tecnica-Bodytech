import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Song from "../song/Song";
import {useHistory} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/hooks";

const SongCard = () => {

   const selectedSong = useAppSelector(state => state.selectedSong);

   const history = useHistory()

   const handleClick = () => {
    history.push("/");
   }

    return (
        <article className="song-card">
            <div className="song-card__cover">
                <img className="song-card__cover-image" src={selectedSong.cover} alt="cover" />
            </div>
            <div className="song-card__info-container">

                <div className="song-card__info-container-block">
                    <p className="song-card__lable">Artist</p>
                    <p className="song-card__text">{selectedSong.artist}</p>
                </div>

                <div className="song-card__info-container-block">
                    <p className="song-card__lable">Title</p>
                    <p className="song-card__text">{selectedSong.name}</p>
                </div>

                <div className="song-card__info-container-block">
                    <p className="song-card__lable">Album</p>
                    <p className="song-card__text">{selectedSong.album}</p>
                </div>

            </div>
            <button onClick={handleClick} className="song-card__button">Back to results</button>
        </article>
    )
}

export default SongCard;