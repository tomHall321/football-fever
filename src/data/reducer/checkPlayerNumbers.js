// if currentNoOfPlayers is not equal to state.numberOfPlayers then tooManyPlayers state will be changed to true
const checkPlayerNumbers = state => {

    const currentNoOfPlayers = state.players.length;

    const tooManyPlayers = currentNoOfPlayers === state.numberOfPlayers;

    return {
        ...state,
        tooManyPlayers,
    };

};

export default checkPlayerNumbers;