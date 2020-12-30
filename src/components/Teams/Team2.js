import { connect } from 'react-redux';
import Team from './Team';

const mapStateToProps = ({ playersTeam2, teamName2 }) => {

    return {
        playersTeam: playersTeam2,
        teamName: teamName2,
    };

};

export default connect(mapStateToProps)(Team);