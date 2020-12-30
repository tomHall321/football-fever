import React from 'react';

const TeamList = ({ playersTeam, teamName }) => {

    return (
        <>

            <ul className="team-list">

                <h1 className="team-header">{teamName}</h1>

                {playersTeam.map((player, index) => {

                    return (
                        <li
                            className="player-card"
                            key={index}
                        >

                            <p className="name-card">{player.name}</p>

                            <p className="skill-card">skill: {player.skill}</p>

                        </li>
                    )

                })}

            </ul>
        </>

    );

};

export default TeamList;