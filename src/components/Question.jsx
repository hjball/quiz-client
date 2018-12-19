import React from 'react';

import Timer from './Timer';

const Question = ({ quiz, index, timesUp, date }) => (
	<div className="container" style={{height: 400, backgroundColor: "grey", color: "white"}}>
		<h2>{ quiz.category }</h2>
		<p>{ quiz.questions[index].question }</p>
		<Timer date={date} timesUp={ timesUp }/>
	</div>
);

export default Question;