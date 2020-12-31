import React from 'react';
import PlayerHeader from '../Headers/PlayerHeader';
import TeamsHeader from '../Headers/TeamsHeader';
import NumberOfPlayers from '../NumberOfPlayers';
import RandomTeamsBtn from '../RandomTeamsBtn';
import PlayerForm from '../PlayerForm';
import PlayersList from '../PlayersList';
import Team1 from '../Teams/Team1';
import Team2 from '../Teams/Team2';
import SkillTeamsBtn from '../SortSkillBtn';

const Main = ({ tooManyPlayers, teamGenerated }) => {

    return (

        !teamGenerated ?
            <>  
                <PlayerHeader />
                <NumberOfPlayers />
                <PlayerForm />
                <PlayersList />
                <RandomTeamsBtn/>
                <SkillTeamsBtn/>
            </>
            :
            <> 
            <section className="wrapper">
                <TeamsHeader />
                <Team1 />
                <Team2 />
            </section> 
            </>

    );

};

export default Main;