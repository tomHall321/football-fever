import { connect } from 'react-redux';
import SkillTeamsBtn from './SortSkillBtn';
import { createSkillTeams } from '../../data/action';

const mapStateToProps = ({ tooManyPlayers }) => ({ tooManyPlayers });

const mapDispatchToProps = dispatch => {

    return {
        handleSkillTeams: () => dispatch(createSkillTeams())
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillTeamsBtn);