import { connect } from 'react-redux';

import Question from '../components/Question';


const mapStateToProps = ({ quiz }) => ({ quiz });

export default connect(mapStateToProps)(Question);