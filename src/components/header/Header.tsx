import React, { useEffect, useRef, useState } from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import logoDesktop from "../../assets/logo/logoDesktop.png";
import {song} from "../../redux/types";
import {getAllSongsAction} from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Header = () => {

    const history = useHistory()

    const dispatch = useDispatch();

    //saving the spotify token in local state
    const [spotifyToken, setSpotifyToken] = useState("");
    
    //getting the spotify token
    useEffect(() => {
        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`),
            },
            body: "grant_type=client_credentials"
        })
        .then(response => response.json())
        .then(data => setSpotifyToken(data.access_token));
    }, [])

    //getting the Form element from the dom
    const searchForm = useRef<HTMLFormElement>(null)

    //saving the song that the user types in the search input
    const [songName, setSongName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSongName(e.target.value);
    }

    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        //looking for the songs the user has typep
        const request = await fetch(`https://api.spotify.com/v1/search?q=${songName}&type=track&limit=8`, {
            method: "GET",
            headers: { "Authorization": "Bearer " + spotifyToken }
        })
        const data = await request.json()

        //extracting only the propieties we are going to use
        let tracksArray: song[] = []
        for (let i = 0; i < data.tracks.items.length; i++) {
            const newSong: song = {
                key: data.tracks.items[i].id,
                name: data.tracks.items[i].name,
                artist: data.tracks.items[i].artists[0].name,
                album: data.tracks.items[i].album.name,
                cover: data.tracks.items[i].album.images[0].url
            }
            tracksArray.push(newSong)
        }

        //sending the songs to the state
        dispatch(getAllSongsAction(tracksArray));

        searchForm.current?.reset();
        history.push("/");
        setSongName("");
    }

    return (
        <header className="header">
            <div className="header__green-bar"></div>
            <img className="header__logo" src={logoDesktop} alt="company logo" />
            <form ref={searchForm} onSubmit={handleSubmit} className="header__form">

                <label className="header__lable" htmlFor="song">Find your song</label>

                <input
                    onChange={handleChange}
                    className="header__input"
                    id="song"
                    type="text"
                    name="song"
                    placeholder="Write your song title"
                />

                <button
                    className="header__button"
                    type="submit"
                >Search</button>

            </form>

        </header>
    )
}

export default Header;