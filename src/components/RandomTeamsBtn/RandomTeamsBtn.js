import React from 'react';

const RandomTeamsBtn = ({ handleCreateTeams, tooManyPlayers }) => {

    return (

        <button
            className="btn-confirmsteams"
            onClick={() => handleCreateTeams()}
            disabled={tooManyPlayers ? false : true}
        >Draw random teams</button>

    );
};

export default RandomTeamsBtn;