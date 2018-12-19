import React, { Component } from 'react';

class Answers extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { quiz } = this.props;
		console.log();
		return (
			<div className="container d-flex flex-wrap align-items-center justify-content-center" style={{height: 150, backgroundColor: "lightgrey"}}>
				<div style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}>
					<p>A</p>
					<p>{ quiz.questions[(this.props.index)].answer_A }</p>
				</div>
				<div style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}>
					<p>B</p>
					<p>{ quiz.questions[(this.props.index)].answer_B }</p>
				</div>
				<div style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}>
					<p>C</p>
					<p>{ quiz.questions[(this.props.index)].answer_C }</p>
				</div>
				<div 
					style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}
					onClick={ this.props.handleClick }
				>
					<p>D</p>
					<p>{ quiz.questions[(this.props.index)].answer_D }</p>
				</div>
			</div>
		)
	}
};

export default Answers;