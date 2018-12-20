import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ result, quiz }) => (
	<React.Fragment>
		<div className="result-title-container">
			<h2>{ quiz.category }</h2>
		</div>
		<div className="result-container">
			<h2>You got { result.result } out of { result.outOf }</h2>
		</div>
		<div className="goback-container">
			<Link className="goback" to="/">Go Back</Link>
		</div>
	</React.Fragment>
);

export default Result;