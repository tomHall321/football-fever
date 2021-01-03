const changeNumberOfPlayers = (state, { value }) => {

    //state.numberOfPlayers will be summed by either +2 or -2
    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    };

};

export default changeNumberOfPlayers;