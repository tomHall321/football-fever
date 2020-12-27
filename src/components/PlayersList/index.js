import { connect } from 'react-redux';
import PlayersList from './PlayersList';

const mapStateToProps = ({ players }) => ({ players });

export default connect(mapStateToProps, null)(PlayersList);