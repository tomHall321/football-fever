import React from 'react';
import NumberOfPlayers from '../NumberOfPlayers';
import CreateTeamsBtn from '../CreateTeamsBtn';
import PlayerForm from '../PlayerForm';
import PlayersList from '../PlayersList';
import OnToTeamsBtn from '../OnToTeamsBtn';
import Team1 from '../Teams/Team1';
import Team2 from '../Teams/Team2';

const Main = ({ tooManyPlayers, playersAndTeamNamesFinished }) => {

    return (

        !playersAndTeamNamesFinished ?
            <>  
                <NumberOfPlayers />
                <PlayerForm />
                <PlayersList />
                <OnToTeamsBtn/>
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