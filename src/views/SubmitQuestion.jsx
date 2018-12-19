import React from 'react';

import SubmitQInput from '../components/SubmitQInput';
import SubmitAInput from '../components/SubmitAInput';
import CheckBoxes from '../components/CheckBoxes';

const SubmitQuestion = () => (
        <React.Fragment>
        	<div style={{marginTop: 50, marginBottom: 50}}>
	            <SubmitQInput />
	            <SubmitAInput />
	            <CheckBoxes />
	        </div>
        </React.Fragment>
   
);

export default SubmitQuestion;