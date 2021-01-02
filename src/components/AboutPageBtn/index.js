import { connect } from "react-redux";
import AboutPageBtn from "./AboutPageBtn";
import { showAboutPage } from '../../data/action';

const mapStateToProps = ({ aboutPage }) => ({ aboutPage });

const mapDispatchToProps = dispatch => {

    return {
        handleClick: () => { 
            dispatch(showAboutPage());
        }
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPageBtn);