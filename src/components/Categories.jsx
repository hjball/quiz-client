import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render () {
		const { categories } = this.props;
		console.log( categories )

		return (
			<React.Fragment>
			<div className="container d-flex flex-wrap justify-content-around">
			{ categories.map((item, index) => (
				<Category 
					name={ item.category } 
					key={ index }
					link={ `/quiz/${ item.id }` }
					// handleClick={ () => this.props.handleClick(item.id)}
				/>
			))}
			</div>
			</React.Fragment>
		)
	}
};

export default Categories;