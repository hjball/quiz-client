import React from 'react';

const SubmitAInput = () => (
	<div className="container d-flex flex-wrap align-items-center justify-content-center" style={{height: 150, backgroundColor: "lightgrey"}}>
		<div style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}>
			<p>A</p>
			<textarea placeholder="Answer A here"></textarea>
		</div>
		<div style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}>
			<p>B</p>
			<textarea placeholder="Answer B here"></textarea>
		</div>
		<div style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}>
			<p>C</p>
			<textarea placeholder="Answer C here"></textarea>
		</div>
		<div style={{width: '22%', height: '80%', backgroundColor: "darkgrey", margin: 8, color: "white"}}>
			<p>D</p>
			<textarea placeholder="Answer D here"></textarea>
		</div>
	</div>
);

export default SubmitAInput;