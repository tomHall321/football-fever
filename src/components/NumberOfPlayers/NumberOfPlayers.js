import React from 'react';

const NumberOfPlayers = ({ numberOfPlayers, handleDecrement, handleIncrement }) => {

    return (
        <div className="number-of-players-wrapper">

            <p>
                How many players: {numberOfPlayers}
            </p>

            <button
                onClick={handleDecrement}
                className="player-number-btn"
            >-</button>

            <button
                onClick={handleIncrement}
                className="player-number-btn"
            >+</button>

        </div>
    );

};

export default NumberOfPlayers;