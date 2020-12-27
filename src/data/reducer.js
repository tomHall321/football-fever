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

const createTeams = (state) => {
    let playersArray = state.players;

    const shuffle = (playersArray) => playersArray.sort(() => 0.5 - Math.random());

    let newArr = shuffle(playersArray);

    let team1 = newArr.slice(0, (newArr.length / 2));
    let team2 = newArr.slice((newArr.length / 2), (newArr.length));

    return {
        ...state,
        playersTeam1: team1,
        playersTeam2: team2,
        players: [],
    };
};


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return checkPlayerNumbers(addPlayer(state, action));
        case "CREATE_TEAMS": return createTeams(state);
        default: return state;
    }
};

export default reducer; 