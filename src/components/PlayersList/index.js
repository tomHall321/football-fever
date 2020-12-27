import { connect } from 'react-redux';
import PlayersList from './PlayersList';
import { createTeams } from '../../data/action';

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => {


    return {
        handleCreateTeams: () => dispatch(createTeams())
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);