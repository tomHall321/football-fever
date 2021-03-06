import React from 'react';

const SkillTeamsBtn = ({ handleSkillTeams, tooManyPlayers }) => {

    return (

        <button
            className="btn-skill-teams"
            onClick={() => handleSkillTeams()}
            disabled={tooManyPlayers ? false : true}
        >Draw fair teams</button>

    );
};

export default SkillTeamsBtn;