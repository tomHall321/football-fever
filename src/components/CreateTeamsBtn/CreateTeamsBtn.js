import React from 'react';

const CreateTeamsBtn = ({ handleCreateTeams }) => {

    return (

        <button
            className="btn-confirmsteams"
            onClick={() => handleCreateTeams()}
        >Draw random teams</button>

    );
};

export default CreateTeamsBtn;