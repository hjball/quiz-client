import React, { Component } from 'react';
import Category from './Category';

import history from '../history';

class Categories extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	handleClick() {
		this.props.getQuiz()
		history.push("/quiz");
	}

	render () {
		const { categories } = this.props;
		console.log( categories )

		return (
			<React.Fragment>
				<div className="categories-title">
					<h2>Categories</h2>
				</div>
				<div className="categories-container">
				{ categories.map((item, index) => (
					<Category 
						name={ item.category } 
						key={ index }
						handleClick={ this.handleClick }
					/>
				))}
				</div>
			</React.Fragment>
		)
	}
};

export default Categories;