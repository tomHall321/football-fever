import initial from '../initial';
import createRandomTeams from './createRandomTeams';
import addPlayer from './addPlayer';
import addTeamNames from './addTeamNames';
import changeNumberOfPlayers from './changeNumberOfPlayers';
import checkPlayerNumbers from './checkPlayerNumbers';
import createSkillTeams from './createSkillTeams';
import deletePlayer from './deletePlayer';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return checkPlayerNumbers(addPlayer(state, action));
        case "DELETE_PLAYER": return deletePlayer(state, action);
        case "ADD_TEAM_NAMES": return addTeamNames(state, action);
        case "CHANGE_NO_OF_PLAYERS": return checkPlayerNumbers(changeNumberOfPlayers(state, action));
        case "CREATE_RANDOM_TEAMS": return createRandomTeams(state, action);
        case "CREATE_SKILL_TEAMS": return createSkillTeams(state, action);
        case "RESET": return initial;
        default: return state;
    }
};

export default reducer; 