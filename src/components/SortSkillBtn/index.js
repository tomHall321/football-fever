import { connect } from 'react-redux';
import SkillTeamsBtn from './SortSkillBtn';
import { createTeams } from '../../data/action';

const mapDispatchToProps = dispatch => {

    return {
        handleSkillTeams: () => dispatch(createTeams())
    };
    
};

export default connect(null, mapDispatchToProps)(SkillTeamsBtn);