import React from 'react';

const Question = ({ quiz, index }) => (
	<div className="container" style={{height: 400, backgroundColor: "grey", color: "white"}}>
		<h2>{ quiz.category }</h2>
		<p>{ quiz.questions[index].question }</p>
	</div>
);

export default Question;