import React, { Component } from 'react';

class Question extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { quiz } = this.props;
		console.log('QuestionContainer:', this.props)
		return (
			<div className="container" style={{height: 400, backgroundColor: "grey", color: "white"}}>
			<h2>{ quiz }</h2>
			<p>Which historical individual has the most descendents alive today?</p>
			</div>
		)
	}
};

export default Question;