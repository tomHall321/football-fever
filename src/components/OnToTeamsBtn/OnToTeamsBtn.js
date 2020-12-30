import React from 'react';

const OnToTeamsBtn = ({ tooManyPlayers, handlePlayersFinished }) => {

    return (

        <button
            className="btn-confirms-players-teamNames"
            onClick={() => handlePlayersFinished()}
            disabled={tooManyPlayers ? false : true}
        >Finished with player creation and Team Names</button>

    );
};

export default OnToTeamsBtn;