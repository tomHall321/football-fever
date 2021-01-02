import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ aboutPage }) => ({ aboutPage });

export default connect(mapStateToProps, null)(App);