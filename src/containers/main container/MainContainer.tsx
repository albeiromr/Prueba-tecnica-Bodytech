import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Header from "../../components/header/Header";
import TitleBar from '../../components/title bar/TitleBar';
import MainSection from '../../components/main section/MainSection';
import Footer from '../../components/footer/Footer';

const MainContainer = () => {

    return (
        <div className="main-container">
            <Header />
            <TitleBar />
            <MainSection />
            <Footer />
        </div>
    )
}

export default MainContainer