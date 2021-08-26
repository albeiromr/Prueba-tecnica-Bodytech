import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import logoDesktop from "../../assets/logo/logoDesktop.png";

const Header = () => {

    return (
        <header className="header">
            <div className="header__green-bar"></div>
            <img className="header__logo" src={logoDesktop} alt="company logo" />
            <form className="header__form">
                <label className="header__lable" htmlFor="song">Find your song</label>
                <input 
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