const changeNumberOfPlayers = (state, { value }) => {

    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    };

};

export default changeNumberOfPlayers;