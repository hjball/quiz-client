import React from 'react';

import Question from '../components/Question';
import Answers from '../components/Answers';

const Quiz = () => (
        <React.Fragment>
        	<div style={{marginTop: 50, marginBottom: 50}}>
	            <Question />
	            <Answers />
	        </div>
        </React.Fragment>
   
);

export default Quiz;