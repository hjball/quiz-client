import React, { Component } from 'react';

import Question from '../containers/QuestionContainer';
import Answers from '../containers/AnswersContainer';

import history from '../history';

class Quiz extends Component {
	constructor(props) {
		super(props);
			this.state = {
				index: 0,
				result: 0,
				outOf: 0,
				date: Date.now() + 15000,
			}

			this.handleClick = this.handleClick.bind(this);
			this.timesUp = this.timesUp.bind(this);
	}

	handleClick() {
		if ((this.state.index + 1) === this.props.questions.length) {
			history.push("/quiz/result")

		} else {
			this.setState({
				index: (this.state.index + 1),
				date: Date.now() + 15000
			})
		}		
	}

	timesUp() {
		if ((this.state.index + 1) === this.props.questions.length) {
			history.push("/quiz/result")

		} else {
			this.setState({
				index: (this.state.index + 1),
				date: Date.now() + 15000
			})
		}		
	}

	render() {
		return (
			<React.Fragment>
	        	<div>
		            <Question date={this.state.date} timesUp={ this.timesUp } index={ this.state.index } />
		            <Answers handleClick={ this.handleClick } index={ this.state.index }/> 
		        </div>
        	</React.Fragment>
		)
		
	}
}    

export default Quiz;