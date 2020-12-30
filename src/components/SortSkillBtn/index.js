import { connect } from 'react-redux';
import SkillTeamsBtn from './SortSkillBtn';
import { createTeams } from '../../data/action';

const mapStateToProps = ({ tooManyPlayers }) => ({ tooManyPlayers });

const mapDispatchToProps = dispatch => {

    return {
        handleSkillTeams: () => dispatch(createTeams())
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillTeamsBtn);