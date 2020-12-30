import { connect } from 'react-redux';
import OnToTeamsBtn from './OnToTeamsBtn';
import { checkPlayerAndTeamNaming } from '../../data/action';

const mapDispatchToProps = dispatch => {

    return {
        handlePlayersFinished: () => dispatch(checkPlayerAndTeamNaming())
    };
    
};

export default connect(null, mapDispatchToProps)(OnToTeamsBtn);