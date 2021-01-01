import React, { useEffect, useRef } from "react";

const PlayersList = ({ players, handleClick, tooManyPlayers }) => {

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    return (

        <section className="players-list-container">

            <header className="players-list-header">Playing this time:</header>

            <ul className="players-list">
                {/* iterating through players array, accessing name and skill properties */}
                {players.map((player, index) => {
                    return (
                        <li className="player-card" key={index}>

                            <p className="player-name">{player.name}</p>
                            <p className="player-skill">Skill: {player.skill}</p>

                            <button className="player-delete-btn"
                                onClick={() => handleClick(index)}
                            >
                                x
                            </button>

                        </li>
                    )
                })}
            </ul>

            <div ref={divRef} />
            
        </section>
    );
};

export default PlayersList;