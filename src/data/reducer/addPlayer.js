const addPlayer = (state, { data }) => {
    
    return {
        ...state,
        players: [
            ...state.players,
            { name: data.playerName, skill: data.playerSkill }
        ]
    };

};

export default addPlayer;