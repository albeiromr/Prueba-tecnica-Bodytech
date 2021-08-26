import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const TitleBar = () => {

    return(
        <div className="title-bar">
            <h1 className="title-bar__title" >Your Results</h1>
            <div className="title-bar__line" />
        </div>
    )
}

export default TitleBar;