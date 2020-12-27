import { connect } from 'react-redux';
import Team from './Team';

const mapStateToProps = ({ playersTeam1 }) => {

    return { 
        playersTeam: playersTeam1,
    };
    
};

export default connect(mapStateToProps)(Team);