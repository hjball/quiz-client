import React, { Component } from 'react';

class Question extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { quiz } = this.props;
		return (
			<div className="container" style={{height: 400, backgroundColor: "grey", color: "white"}}>
				<h2>{ quiz.category }</h2>
				<p>{ quiz.questions[this.props.index].question }</p>
			</div>
		)
	}
};

export default Question;