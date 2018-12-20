import React from 'react';
import Answer from './Answer';

const Answers = ({ quiz, index, handleClick }) => (
	<div className="answer-container">
		<Answer 
			letter="A"
			handleClick={ () => handleClick('answer_A') }
			answer={ quiz.questions[index].answer_A }/>
		<Answer 
			letter="B"
			handleClick={ () => handleClick('answer_B') }
			answer={ quiz.questions[index].answer_B }/>
		<Answer 
			letter="C"
			handleClick={ () => handleClick('answer_C') }
			answer={ quiz.questions[index].answer_C }/>
		<Answer 
			letter="D"
			handleClick={ () => handleClick('answer_D') }
			answer={ quiz.questions[index].answer_D }/>
	</div>
);

export default Answers;