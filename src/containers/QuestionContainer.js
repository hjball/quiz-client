import { connect } from 'react-redux';

import Question from '../components/Question';

const mapStateToProps = state => {
	console.log({ state })
	return {
		id: state.categories.id,
		categories: state.categories.category,
	}
};

export default connect(mapStateToProps)(Question);