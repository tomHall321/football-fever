import React from 'react';

const CreateTeamsBtn = ({ handleCreateTeams, tooManyPlayers }) => {

    return (

        <button
            className="btn-confirmsteams"
            onClick={() => handleCreateTeams()}
            disabled={tooManyPlayers ? false : true}
        >Draw random teams</button>

    );
};

export default CreateTeamsBtn;