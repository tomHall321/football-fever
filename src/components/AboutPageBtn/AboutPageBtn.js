import React from "react";

const AboutPageBtn = ({ handleClick, aboutPage }) => {

     return (
        <button
            onClick={ handleClick }
            className="btn-reset"
        > {!aboutPage ? "About App" : "Back to App" }</button>
    );

};

export default AboutPageBtn;