import { connect } from "react-redux";
import AboutPageBtn from "./AboutPageBtn";
import { showAboutPage } from '../../data/action';

const mapDispatchToProps = dispatch => {

    return {
        handleClick: () => { 
            dispatch(showAboutPage());
        }
    };
    
};

export default connect(null, mapDispatchToProps)(AboutPageBtn);