import React from 'react';
import Answer from './Answer';

const Answers = ({ quiz, index, handleClick }) => (
	<div className="answer-container">
		<Answer 
			letter="A"
			handleClick={ () => handleClick('answer_A') }
			answer={ quiz.questions[index].answer1 }/>
		<Answer 
			letter="B"
			handleClick={ () => handleClick('answer_B') }
			answer={ quiz.questions[index].answer2 }/>
		<Answer 
			letter="C"
			handleClick={ () => handleClick('answer_C') }
			answer={ quiz.questions[index].answer3 }/>
		<Answer 
			letter="D"
			handleClick={ () => handleClick('answer_D') }
			answer={ quiz.questions[index].answer4 }/>
	</div>
);

export default Answers;