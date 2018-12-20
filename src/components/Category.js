import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ name, handleClick }) => (
	<div 
		className="categories"
		onClick={ handleClick }>
			<h3>{ name }</h3>
	</div>
);

export default Category;