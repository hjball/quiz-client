import React from 'react';
import Answer from './Answer';

const Answers = ({ quiz, index, handleClick }) => (
	<div className="answer-container">
		<Answer 
			letter="A"
			handleClick={ () => handleClick('answer_A') }
			answer={ quiz.questions ? quiz.questions[0][index].answer1 : null}/>
		<Answer 
			letter="B"
			handleClick={ () => handleClick('answer_B') }
			answer={ quiz.questions ? quiz.questions[0][index].answer2 : null}/>
		<Answer 
			letter="C"
			handleClick={ () => handleClick('answer_C') }
			answer={ quiz.questions ? quiz.questions[0][index].answer3 : null}/>
		<Answer 
			letter="D"
			handleClick={ () => handleClick('answer_D') }
			answer={ quiz.questions ? quiz.questions[0][index].answer4 : null}/>
	</div>
);

export default Answers;