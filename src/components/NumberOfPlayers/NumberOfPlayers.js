import React from 'react';

const NumberOfPlayers = ({ numberOfPlayers }) => {

    return (
        <div className="number-of-players-wrapper">

            <p>
                How many players: {numberOfPlayers} a​-side
            </p>

        </div>
    );

};

export default NumberOfPlayers;