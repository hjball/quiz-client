import React from 'react';

const Answer = ({ letter, answer, handleClick }) => (
	<div 
		className="answer"
		onClick={ handleClick }>
		<p>{ letter }</p>
		<p>{ answer }</p>
	</div>
);

export default Answer;