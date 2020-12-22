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

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        default: return state;
    }
};


export default reducer; 