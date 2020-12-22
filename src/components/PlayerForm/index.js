import { connect } from "react-redux";
import PlayerForm from './PlayerForm';
import { addPlayer } from '../../data/action';

//using addPlayer function here, creates action object literal for us
// pass in a function that accepts a value
// pass the value along to the action creator
const mapDispatchToProps = dispatch => {

    return {
        handleSubmit: data => { 
            dispatch(addPlayer(data));
        }
    };
    
};

export default connect(null, mapDispatchToProps)(PlayerForm);