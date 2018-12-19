import { connect } from 'react-redux';

import Answers from '../components/Answers';

const mapStateToProps = ({ quiz }) => ({ quiz });

export default connect(mapStateToProps)(Answers);