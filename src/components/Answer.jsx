import React from 'react';

const Answer = ({ letter, answer, handleClick }) => (
	<div style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}
		onClick={ handleClick }>
		<p>{ letter }</p>
		<p>{ answer }</p>
	</div>
);

export default Answer;