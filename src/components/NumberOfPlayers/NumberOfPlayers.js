import React from 'react';

const NumberOfPlayers = ({ numberOfPlayers, handleDecrement, handleIncrement, min, max, tooManyPlayers }) => {

    return (
        <div className="number-of-players-wrapper">

            <p>
                How many players? {numberOfPlayers}
            </p>

            <button
                onClick={handleDecrement}
                className="player-remove-btn"
                disabled={ numberOfPlayers === min || tooManyPlayers ? true : false }
            >-</button>

            <button
                onClick={handleIncrement}
                className="player-add-btn"
                disabled={ numberOfPlayers === max || tooManyPlayers ? true : false}
            >+</button>

        </div>
    );

};

export default NumberOfPlayers;