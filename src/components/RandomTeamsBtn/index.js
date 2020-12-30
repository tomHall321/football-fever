import { connect } from 'react-redux';
import RandomTeamsBtn from './RandomTeamsBtn';
import { createRandomTeams } from '../../data/action';

const mapStateToProps = ({ tooManyPlayers }) => ({ tooManyPlayers });

const mapDispatchToProps = dispatch => {

    return {
        handleCreateTeams: () => dispatch(createRandomTeams())
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomTeamsBtn);