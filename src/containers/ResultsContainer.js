import { connect } from 'react-redux';

import Result from '../components/Result';

const mapStateToProps = ({ result }) => ({ result });

export default connect(mapStateToProps)(Result);