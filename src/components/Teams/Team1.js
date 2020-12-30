import { connect } from 'react-redux';
import Team from './Team';

const mapStateToProps = ({ playersTeam1, teamName1 }) => {

    return {
        playersTeam: playersTeam1,
        teamName: teamName1,
    };

};


export default connect(mapStateToProps)(Team);