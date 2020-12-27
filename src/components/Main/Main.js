import React from 'react';
import CreateTeamsBtn from '../CreateTeamsBtn';
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
            <section className="wrapper">
                <CreateTeamsBtn/>
                <Team1 />
                <Team2 />
            </section> 
            </>

    );

};

export default Main;