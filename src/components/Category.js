import React from 'react';

const Category = ({ name, handleClick }) => (
	<div 
		className="d-inline-flex card justify-content-center align-items-center" 
		style={{ width: '30%', height: 300, marginTop: 20, marginBottom: 20, backgroundColor: "rgb(212 ,124 ,122)"}}
		onClick={ handleClick }
		>
		<p>{ name }</p>
	</div>
);

export default Category;