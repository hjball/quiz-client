import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ result }) => (
	<div className="container d-flex" style={{height: 400, backgroundColor: "grey", alignItems: "center", justifyContent: "center"}}>
		<h2>You got { result.result } out of { result.outOf }</h2>
		<Link to="/">Go Back</Link>
	</div>
);

export default Result;