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
    
    let team1 = playersArray.slice(0, 5);
    let team2 = playersArray.slice(5, 10);
  
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