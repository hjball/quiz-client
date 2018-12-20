import { connect } from 'react-redux';

import Result from '../components/Result';

const mapStateToProps = (state) => {
	return { 
		quiz: state.quiz,
		result: state.result,
	}
}

export default connect(mapStateToProps)(Result);