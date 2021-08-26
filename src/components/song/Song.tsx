import React, {FC} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import eye from "../../assets/icons/eye.svg"
import {useHistory} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/hooks";
import {selectSongAction} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";

interface songProps {
    title: string;
    artist: string;
    key: string;
    id: string;
}

const Song:FC<songProps> = (props) => {
    
    const dispatch = useDispatch();

    const history = useHistory();

    const allSongs = useAppSelector(state => state.songResults);

    const handleClick = () => {
        const selectedSong = allSongs.filter(song => song.key === props.id)[0];
        dispatch(selectSongAction(selectedSong));
        history.push("/card");
    }

    return (
        <article className="song">
            <h2 className="song__title">{props.title}</h2>
            <p className="song__artist">{props.artist}</p>

            <button onClick={handleClick} className="song__button">
                <p className="song__button-text">View</p>
                <img className="song__button-icon" src={eye} alt="eye icon" />
            </button>
            
            <div className="song__line"/>
        </article>
    )
}

export default Song;