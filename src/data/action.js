//use of action creator, this function creates the ADD_PLAYER action
export const addPlayer = data => {

    return {
        type: "ADD_PLAYER",
        data,
    };

};

export const deletePlayer = data => {
    return {
        type: "DELETE_PLAYER",
        index: data,
    }
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

export const createRandomTeams = () => {

    return {
        type: "CREATE_RANDOM_TEAMS",
    };

};

export const createSkillTeams = () => {

    return {
        type: "CREATE_SKILL_TEAMS",
    };

};

export const showAboutPage = () => {

    return {
        type: "SHOW_ABOUT_PAGE",
    };

};

export const reset = () => {

    return {
        type: "RESET",
    };

};