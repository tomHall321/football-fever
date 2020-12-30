import initial from '../initial';
import createRandomTeams from './createRandomTeams';
import addPlayer from './addPlayer';
import addTeamNames from './addTeamNames';
import changeNumberOfPlayers from './changeNumberOfPlayers';
import checkPlayerNumbers from './checkPlayerNumbers';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return checkPlayerNumbers(addPlayer(state, action));
        case "ADD_TEAM_NAMES": return addTeamNames(state, action);
        case "CHANGE_NO_OF_PLAYERS": return checkPlayerNumbers(changeNumberOfPlayers(state, action));
        case "CREATE_RANDOM_TEAMS": return createRandomTeams(state);
        case "RESET": return initial;
        default: return state;
    }
};

export default reducer; 