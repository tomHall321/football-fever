import { connect } from 'react-redux';
import CreateTeamsBtn from './CreateTeamsBtn';
import { createTeams } from '../../data/action';

const mapStateToProps = ({ teamGenerated }) => ({ teamGenerated });

const mapDispatchToProps = dispatch => {

    return {
        handleCreateTeams: () => dispatch(createTeams())
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamsBtn);