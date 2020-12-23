import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = ({ tooManyPlayers }) => ({ tooManyPlayers });

export default connect(mapStateToProps)(Main);