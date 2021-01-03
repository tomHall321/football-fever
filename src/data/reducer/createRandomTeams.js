const createTeams = state => {
    
    let playersArray = state.players;

    //0.5 - Math.random() will yield either positive or negative value with equal probability. Hence, it will sort the parameters randomly.
    const shuffle = (playersArray) => playersArray.sort(() => 0.5 - Math.random());

    let newArr = shuffle(playersArray);

    //team1 will be first half of randomised array, team2 will be the second.
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