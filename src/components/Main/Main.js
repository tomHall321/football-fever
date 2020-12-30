import React from 'react';
import NumberOfPlayers from '../NumberOfPlayers';
import CreateTeamsBtn from '../CreateTeamsBtn';
import PlayerForm from '../PlayerForm';
import PlayersList from '../PlayersList';
import Team1 from '../Teams/Team1';
import Team2 from '../Teams/Team2';
import SkillTeamsBtn from '../SortSkillBtn';

const Main = ({ tooManyPlayers, teamGenerated }) => {

    return (

        !teamGenerated ?
            <>  
                <NumberOfPlayers />
                <PlayerForm />
                <PlayersList />
                <CreateTeamsBtn/>
                <SkillTeamsBtn/>
            </>
            :
            <> 
            <section className="wrapper">
                <Team1 />
                <Team2 />
            </section> 
            </>

    );

};

export default Main;