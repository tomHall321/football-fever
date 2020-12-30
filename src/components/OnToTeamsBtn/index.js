import { connect } from 'react-redux';
import OnToTeamsBtn from './OnToTeamsBtn';
import { checkPlayerAndTeamNaming } from '../../data/action';

const mapStateToProps = ({ tooManyPlayers }) => ({ tooManyPlayers });

const mapDispatchToProps = dispatch => {

    return {
        handlePlayersFinished: () => dispatch(checkPlayerAndTeamNaming())
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(OnToTeamsBtn);