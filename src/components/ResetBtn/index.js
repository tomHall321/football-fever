import { connect } from "react-redux";
import ResetBtn from './ResetBtn';
import { reset } from '../../data/action';

const mapDispatchToProps = dispatch => {

    return {
        handleClick: () => { 
            dispatch(reset());
        }
    };
    
};

export default connect(null, mapDispatchToProps)(ResetBtn);