import React from "react";

const AboutPageBtn = ({ handleClick }) => {

     return (
        <button
            onClick={ handleClick }
            className="btn-reset"
        >Toogle about page</button>
    );

};

export default AboutPageBtn;