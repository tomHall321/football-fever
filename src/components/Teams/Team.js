import React from 'react';

const TeamList = ({ playersTeam, teamName }) => {

    return (
        <>          
            <ul className="team-list">

            <header className="team-header">Team name: {teamName}</header>
            
                {playersTeam.map((player, index) => {

                    return (

                        <li
                            className="team-card"
                            key={index}
                        >
                    
                            <p className="name-card">Name: {player.name}</p>

                            <p className="skill-card">Skill: {player.skill}</p>

                        </li>

                    )

                })}

            </ul>
        </>

    );

};

export default TeamList;