import { connect } from 'react-redux';

import Quiz from '../views/Quiz';

const mapStateToProps = ({ quiz }) => ({ questions: quiz.questions });

export default connect(mapStateToProps)(Quiz);