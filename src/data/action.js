//use of action creator, this function creates the ADD_PLAYER action
export const addPlayer = data => {

    return {
        type: "ADD_PLAYER",
        data,
    };

};

export const createTeams = () => {

    return {
        type: "CREATE_TEAMS",
    };

};