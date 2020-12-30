import React from 'react';

const CreateTeamsBtn = ({ handleCreateTeams, teamGenerated }) => {

    return (

        <button
            className="btn-confirmsteams"
            onClick={() => handleCreateTeams()}
            disabled={!teamGenerated ? false : true}
        >Draw random teams</button>

    );
};

export default CreateTeamsBtn;