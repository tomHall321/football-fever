import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = ({ tooManyPlayers, playersAndTeamNamesFinished }) => ({ tooManyPlayers, playersAndTeamNamesFinished });

export default connect(mapStateToProps)(Main);