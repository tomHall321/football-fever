const addTeamNames = (state, { data }) => {
    
    return {
        ...state,
        teamName1: data.teamName1,
        teamName2: data.teamName2,
    };

};

export default addTeamNames;