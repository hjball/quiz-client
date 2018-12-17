import React from 'react';
import Category from './Category';

const Categories = () => (
	<React.Fragment>
		<div className="container d-flex justify-content-around	">
			<Category />
			<Category />
			<Category />
		</div>
		<div className="container d-flex justify-content-around	">
			<Category />
			<Category />
			<Category />
		</div>
		<div className="container d-flex justify-content-around	">
			<Category />
			<Category />
			<Category />
		</div>
	</React.Fragment>
);

export default Categories;