import React, { Component } from 'react';

import Question from '../containers/QuestionContainer';
import Answers from '../containers/AnswersContainer';

import history from '../history';

class Quiz extends Component {
	constructor(props) {
		super(props);
			this.state = {
				index: 0,
				time: 10,
				start: 10,
				result: 0,
				outOf: 0,
				date: Date.now() + 5000
			}

			this.handleClick = this.handleClick.bind(this);
			this.timesUp = this.timesUp.bind(this);
	}

	// componentDidMount() {
	// 	setTimeout(() => this.setState({time: })), 15000);
	// }

	handleClick() {
		if ((this.state.index + 1) === this.props.questions.length) {
			history.push("/quiz/1/result")

		} else {
			this.setState({
				index: (this.state.index + 1),
			})
		}		
	}

	timesUp() {
		if ((this.state.index + 1) === this.props.questions.length) {
			history.push("/quiz/1/result")

		} else {
			this.setState({
				index: (this.state.index + 1),
				date: Date.now() + 5000
			})
		}		
	}

	render() {
		return (
			<React.Fragment>
	        	<div style={{marginTop: 50, marginBottom: 50}}>
		            <Question date={this.state.date} timesUp={ this.timesUp } index={ this.state.index } />
		            <Answers handleClick={ this.handleClick } index={ this.state.index }/> 
		        </div>
        	</React.Fragment>
		)
		
	}
}    

export default Quiz;