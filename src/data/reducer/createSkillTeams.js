const createSkillTeams = state => {

    let playersArray = state.players;

    let arrangeBySkill = (players) => {
        return playersArray.sort((a, b) => a.skill - b.skill);
    }

    let sortedPlayerArray = arrangeBySkill(playersArray);

    return {
        ...state,
        playersTeam1: sortedPlayerArray,
        playersTeam2: sortedPlayerArray,
        players: [],
        teamGenerated: true,
    };
};

export default createSkillTeams;