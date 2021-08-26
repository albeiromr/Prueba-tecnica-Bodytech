import React, { useEffect, useRef, useState } from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import axios from "axios";
import logoDesktop from "../../assets/logo/logoDesktop.png";

const Header = () => {
    
    const [spotifyToken, setSpotifyToken] = useState("");
    
    //Getting the spotify token
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
        .then(data => setSpotifyToken(data));
    }, [])

    const searchForm = useRef<HTMLFormElement>(null)

    const [songName, setSongName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSongName(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        //
        searchForm.current?.reset();
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