const createTeams = state => {
    
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
        teamGenerated: true,
    };
};

export default createTeams;