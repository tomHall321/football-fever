//reducer function updated to respond to action, this will update the initial state of 'players' and result in an array of player objects
const addPlayer = (state, { data }) => {
    return {
        ...state,
        players: [
            ...state.players,
            { name: data.playerName, skill: data.playerSkill }
        ]
    };

};

// if currentNoOfPlayers is not equal to state.numberOfPlayers then tooManyPlayers state will be changed to true
const checkPlayerNumbers = state => {

    const currentNoOfPlayers = state.players.length;

    const tooManyPlayers = currentNoOfPlayers === state.numberOfPlayers;

    return {
        ...state,
        tooManyPlayers,
    };

};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return checkPlayerNumbers(addPlayer(state, action));
        default: return state;
    }
};

export default reducer; 