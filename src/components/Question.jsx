import React from 'react';

import Timer from './Timer';

const Question = ({ quiz, index, timesUp, date }) => (
	<React.Fragment>
		<div className="title-container">
			<h2>{ quiz.category }</h2>
		</div>
		<div className="question-container">
			<p>{ quiz.questions[index].question }</p>
		</div>
		<div className='timer-container'>
			<Timer date={date} timesUp={ timesUp }/>
		</div>
	</React.Fragment>
);

export default Question;