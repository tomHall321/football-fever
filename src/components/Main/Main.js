import React from 'react';
import PlayerForm from '../PlayerForm/';
import PlayersList from '../PlayersList';

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
            </>

    );

};

export default Main;