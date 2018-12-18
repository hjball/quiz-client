import { connect } from 'react-redux';

import Categories from '../components/Categories';
import { getCategories } from '../data/actions/api';

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getCategories()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);