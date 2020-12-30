import initial from '../initial';
import createTeams from './createTeams';
import addPlayer from './addPlayer';
import addTeamNames from './addTeamNames';
import changeNumberOfPlayers from './changeNumberOfPlayers';
import checkPlayerNumbers from './checkPlayerNumbers';
import checkPlayerAndTeamNaming from './checkPlayerAndTeamNaming';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return checkPlayerNumbers(addPlayer(state, action));
        case "ADD_TEAM_NAMES": return addTeamNames(state, action);
        case "CHANGE_NO_OF_PLAYERS": return checkPlayerNumbers(changeNumberOfPlayers(state, action));
        case "FINISH_NAMING": return checkPlayerAndTeamNaming(state);
        case "CREATE_TEAMS": return createTeams(state);
        case "RESET": return initial;
        default: return state;
    }
};

export default reducer; 