import React from 'react';

const PlayersList = ({ players, handleClick, tooManyPlayers }) => {

    return (

        <section className="players-list-container">

            <header className="players-list-header">Playing this time...</header>

            <ul className="players-list">
                {/* iterating through players array, accessing name and skill properties */}
                {players.map((player, index) => {
                    return (
                        <li className="player-card" key={index}>

                            <p className="player-name">{player.name}</p>
                            <p className="player-skill">skill: {player.skill}</p>

                            <button
                                onClick={() => handleClick(index)}
                            >
                                x
                            </button>

                        </li>
                    )
                })}
            </ul>

        </section>
    );
};

export default PlayersList;