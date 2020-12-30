import React, { Component } from 'react';
import FormField from './FormField';

class PlayerForm extends Component {

    constructor(props) {
        super(props);

        //tracking inputs into local state
        this.state = {
            playerName: "",
            playerSkill: "",
            teamName1: "Home Team",
            teamName2: "Away Team",
        };

        this.handleName = this.handleName.bind(this);
        this.handleSkill = this.handleSkill.bind(this);
        this.handleTeamName1 = this.handleTeamName1.bind(this);
        this.handleTeamName2 = this.handleTeamName2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    //update player name state
    handleName = e => {
        this.setState({
            playerName: e.currentTarget.value
        });
    };

    //update team1 name state
    handleTeamName1 = e => {
        this.setState({
            teamName1: e.currentTarget.value
        });
    }

    //update team2 name state
    handleTeamName2 = e => {
        this.setState({
            teamName2: e.currentTarget.value
        });
    }

    //update player skill state
    handleSkill = e => {
        this.setState({
            playerSkill: e.currentTarget.value
        });
    };

    //pass data up when form is submitted
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    };

    render() {

        const { playerName, playerSkill, teamName1, teamName2 } = this.state;

        const { tooManyPlayers } = this.props;

        return (
            <form
                onSubmit={this.handleSubmit}
                className="player-form-container"
            >

                <div className="player-form-inputs">

                    <FormField
                        label="Change Team 1 name:"
                        name="team-name"
                        type="text"
                        handleChange={this.handleTeamName1}
                        value={teamName1}
                        containerClass={"form-field"}
                    />

                    <FormField
                        label="Change Team 2 name:"
                        name="team-name"
                        type="text"
                        handleChange={this.handleTeamName2}
                        value={teamName2}
                        containerClass={"form-field"}
                    />

                    <FormField
                        name={"player-name"}
                        label={"Enter player name"}
                        type={"text"}
                        value={playerName}
                        handleChange={this.handleName}
                        containerClass={"form-field"}
                    />

                    <FormField
                        name={"player-skill"}
                        label={"Seen a football pitch"}
                        type={"radio"}
                        checked={playerSkill === '1'}
                        value={"1"}
                        handleChange={this.handleSkill}
                        containerClass={"form-field"}
                    />

                    <FormField
                        name={"player-skill"}
                        label={"Youth trials with xyz United"}
                        type={"radio"}
                        checked={playerSkill === '2'}
                        value={"2"}
                        handleChange={this.handleSkill}
                        containerClass={"form-field"}
                    />

                    <FormField
                        name={"player-skill"}
                        label={"Give them the ball"}
                        type={"radio"}
                        checked={playerSkill === '3'}
                        value={"3"}
                        handleChange={this.handleSkill}
                        containerClass={"form-field"}
                    />

                </div>


                <button
                    type="submit"
                    className="player-form-btn"
                    disabled={tooManyPlayers ? true : false}
                >Add player</button>

            </form>
        );

    };
};

export default PlayerForm;