//use of action creator, this function creates the ADD_PLAYER action
export const addPlayer = data => {

    return {
        type: "ADD_PLAYER",
        data,
    };

};

export const addTeamNames = data => {

    return {
        type: "ADD_TEAM_NAMES",
        data,
    };

};

export const changeNumberOfPlayers = value => {

    return {
        type: "CHANGE_NO_OF_PLAYERS",
        value,
    };

};

export const createTeams = () => {

    return {
        type: "CREATE_TEAMS",
    };

};

export const reset = () => {

    return {
        type: "RESET",
    };

};