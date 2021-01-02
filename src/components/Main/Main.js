import React from 'react';
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
            <section className="column-wrapper">
                <div className="row-wrapper">
                    <PlayerForm />
                    <div className="column-wrapper">
                        <NumberOfPlayers />
                        <PlayersList />
                    </div>
                    <RandomTeamsBtn />
                    <SkillTeamsBtn />
                </div>
            </section>
            :
            <>
                <section className="row-wrapper">
                    <Team1 />
                    <Team2 />
                </section>
            </>

    );

};

export default Main;