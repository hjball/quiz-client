import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ name, link }) => (
	<div 
		className="d-inline-flex card justify-content-center align-items-center" 
		style={{ width: '30%', height: 300, marginTop: 20, marginBottom: 20, backgroundColor: "rgb(212 ,124 ,122)"}}>
		<Link to={ link }>
			<p>{ name }</p>
		</Link>
	</div>
);

export default Category;