import { connect } from 'react-redux';
import PlayersList from './PlayersList';
import { deletePlayer } from '../../data/action';

const mapStateToProps = ({ players, tooManyPlayers }) => ({ players, tooManyPlayers });

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (state, data) => dispatch(deletePlayer(state, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);