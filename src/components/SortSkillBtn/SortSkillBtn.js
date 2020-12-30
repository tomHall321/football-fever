import React from 'react';

const SkillTeamsBtn = ({ handleSkillTeams }) => {

    return (

        <button
            className="btn-skill-teams"
            onClick={() => handleSkillTeams()}
        >Draw Skill teams</button>

    );
};

export default SkillTeamsBtn;