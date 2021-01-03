const createSkillTeams = state => {

    let playersArray = state.players;
    let team1 = [];
    let team2 = [];

    //playersAray ordered by skill
    let arrangeBySkill = (players) => {
        return playersArray.sort((a, b) => a.skill - b.skill);
    }

    let sortedPlayerArray = arrangeBySkill(playersArray);

    let splitPlayers = (sortedPlayerArray) => {

        //using filter to select odd indexed players
        team1 = sortedPlayerArray.filter((player, index) => {
            return index % 2 === 1;
        });

        //using filter to select even indexed players
        team2 = sortedPlayerArray.filter((player, index) => {
            return index % 2 === 0;
        });

    }

    splitPlayers(sortedPlayerArray);

    return {
        ...state,
        playersTeam1: team1,
        playersTeam2: team2,
        players: [],
        teamGenerated: true,
    };
};

export default createSkillTeams;