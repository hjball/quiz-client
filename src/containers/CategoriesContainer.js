import { connect } from 'react-redux';

import Categories from '../components/Categories';
import { getCategories, getQuiz } from '../data/actions/api';

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getCategories()),
		getQuiz: () => dispatch(getQuiz()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);