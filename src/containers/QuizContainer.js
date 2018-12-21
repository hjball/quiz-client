import { connect } from 'react-redux';

import Quiz from '../views/Quiz';

const mapStateToProps = ({ quiz }) => ({ quiz });

export default connect(mapStateToProps)(Quiz);