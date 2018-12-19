import React from 'react';

const Result = ({ result }) => (
	<div className="container d-flex" style={{height: 400, backgroundColor: "grey", alignItems: "center", justifyContent: "center"}}>
		<h2>You got { result.result } out of { result.outOf }</h2>
		<a href="#">Go Back</a>
	</div>
);

export default Result;