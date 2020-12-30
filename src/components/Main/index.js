import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = ({ tooManyPlayers, teamGenerated }) => ({ tooManyPlayers, teamGenerated });

export default connect(mapStateToProps)(Main);