import React from 'react';

import Timer from './Timer';

const Question = ({ quiz, index, timesUp, date }) => quiz.questions ? (
	<React.Fragment>
		<div className="title-container">
			<h2>{ quiz.category }</h2>
		</div>
		<div className="question-container">
			<p>{ quiz.questions[0][index].question }</p>
		</div>
		<div className='timer-container'>
			<Timer date={date} timesUp={ timesUp }/>
		</div>
	</React.Fragment>
) : null;

export default Question;