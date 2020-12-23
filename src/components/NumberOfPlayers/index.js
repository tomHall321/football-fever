import { connect } from 'react-redux';
import NumberOfPlayers from './NumberOfPlayers';

const mapStateToProps = ({ numberOfPlayers }) => ({ numberOfPlayers });

export default connect(mapStateToProps)(NumberOfPlayers);