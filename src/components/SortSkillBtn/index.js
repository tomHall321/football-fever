import { connect } from 'react-redux';
import SkillTeamsBtn from './SortSkillBtn';
import { createRandomTeams } from '../../data/action';

const mapStateToProps = ({ tooManyPlayers }) => ({ tooManyPlayers });

const mapDispatchToProps = dispatch => {

    return {
        handleSkillTeams: () => dispatch(createRandomTeams())
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillTeamsBtn);