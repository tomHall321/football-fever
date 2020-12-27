import React, { Component } from 'react';

class PlayersList extends Component {

    //currently no need for a constructor 
    //this will change as likely a method will be needed (button with an associated action to create teams)

    render() {

        const { players } = this.props;

        return (
            <section>

                <div className="players-list-container">

                    <h3 className="players-list-header">Playing this time...</h3>

                    <ul className="players-list">
                        {/* iterating through players array, accessing name and skill properties */}
                        {players.map((player, index) => {
                            return (
                                <li className="player-card" key={index}>
                                    <p className="player-name">{player.name}</p>
                                    <p className="player-skill">skill: {player.skill}</p>
                                </li>
                            )
                        })}
                    </ul>

                </div>

            </section>
        );
    };
};

export default PlayersList;