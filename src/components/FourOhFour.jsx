import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => (
	<React.Fragment>
		<div className="four-oh-four-title-container">
				<h2>404</h2>
		</div>
		<div className="four-oh-four-container">
			<div className="four-oh-four-centering">
				<h3 className="four-oh-four-message">Q: What is 1000 minus 596?</h3>
			</div>
			<div className="four-oh-four-centering">
				<h3 className="four-oh-four-message">A: 404 (page not found)</h3>
			</div>
		</div>
		<div className="goback-container">
			<Link className="goback" to="/">Go Back</Link>
		</div>
	</React.Fragment>
);

export default FourOhFour;