import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Song from "../song/Song";
import {useAppSelector} from "../../redux/hooks/hooks";

const SongsContainer = () => {

    const songs = useAppSelector(state => state.songResults);

    return (
        <div className="songs-container">
            {songs.map(song => <Song
                key={song.key}
                id={song.key}
                title={song.name}
                artist={song.artist}
            />)}
            
        </div>
    )
}

export default SongsContainer;