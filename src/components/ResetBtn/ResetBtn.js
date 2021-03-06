import React from 'react';

const ResetBtn = ({ handleClick }) => {

    return (
        <button
            onClick={handleClick}
            className="btn-reset"
        >Reset App</button>
    );

};

export default ResetBtn;