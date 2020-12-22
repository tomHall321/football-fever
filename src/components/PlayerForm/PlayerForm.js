import React, { Component } from 'react';
import FormField from './FormField';

class PlayerForm extends Component {

    constructor(props) {
        super(props);

        //tracking inputs into local state
        this.state = {
            playerName: "",
            playerSkill: "",
        };

        this.handleName = this.handleName.bind(this);
        this.handleSkill = this.handleSkill.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    //update player name state
    handleName = e => {
        this.setState({
            playerName: e.currentTarget.value
        });
    };

    //update player skill state
    handleSkill = e => {
        this.setState({
            playerSkill: e.currentTarget.value
        });
    };

    //pass data up when form is submitted
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    };

    render() {

        const { playerName, playerSkill } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit}
                className="form-container"
            >

                <div className="form-inputs">

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
                    className="playerForm-btn"
                >Add player</button>

            </form>
        );

    };
};

export default PlayerForm;