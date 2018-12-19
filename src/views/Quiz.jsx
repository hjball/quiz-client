import React, { Component } from 'react';

import Question from '../containers/QuestionContainer';
import Answers from '../containers/AnswersContainer';

class Quiz extends Component {
	constructor(props) {
		super(props);
			this.state = {
				index: 0,
			}

			this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			index: (this.state.index + 1),
		})
	}

	render() {
		return (
			<React.Fragment>
	        	<div style={{marginTop: 50, marginBottom: 50}}>
		            <Question index={ this.state.index } />
		            <Answers handleClick={ this.handleClick } index={ this.state.index } />
		        </div>
        	</React.Fragment>
		)
		
	}
}    

export default Quiz;