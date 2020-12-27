import React from 'react';
import PlayerForm from '../PlayerForm/';
import PlayersList from '../PlayersList';
import Team1 from '../Teams/Team1';
import Team2 from '../Teams/Team2';

const Main = ({ tooManyPlayers }) => {

    return (

        !tooManyPlayers ?
            <>
                <PlayerForm />
                <PlayersList />
            </>
            :
            <>
                <PlayersList />
                <Team1 />
                <Team2 />
            </>

    );

};

export default Main;