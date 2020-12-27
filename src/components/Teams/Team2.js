import { connect } from 'react-redux';
import Team from './Team';

const mapStateToProps = ({ playersTeam2 }) => {

    return { 
        playersTeam: playersTeam2,
    };
    
};

export default connect(mapStateToProps)(Team);