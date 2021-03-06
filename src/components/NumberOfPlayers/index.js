import { connect } from 'react-redux';
import NumberOfPlayers from './NumberOfPlayers';
import { changeNumberOfPlayers } from '../../data/action';

const mapStateToProps = ({ numberOfPlayers, min, max, tooManyPlayers }) => ({ numberOfPlayers, min, max, tooManyPlayers });

const mapDispatchToProps = dispatch => {

    return {
        handleIncrement: () => dispatch(changeNumberOfPlayers(2)),
        handleDecrement: () => dispatch(changeNumberOfPlayers(-2)),
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfPlayers);