import React from 'react';

const CheckBoxes = () => (
	<form className="container d-flex flex-wrap align-items-center justify-content-center" style={{height: 150, backgroundColor: "lightgrey"}}>
		<div style={{width: '22%', height: '80%', backgroundColor: "salmon", margin: 8, color: "white"}}>
			<input type="radio" name="selectcorrect" />
		</div>
		<div style={{width: '22%', height: '80%', backgroundColor: "salmon", margin: 8, color: "white"}}>
			<input type="radio" name="selectcorrect" />
		</div>
		<div style={{width: '22%', height: '80%', backgroundColor: "salmon", margin: 8, color: "white"}}>
			<input type="radio" name="selectcorrect" />
		</div>
		<div style={{width: '22%', height: '80%', backgroundColor: "salmon", margin: 8, color: "white"}}>
			<input type="radio" name="selectcorrect" />
		</div>
	</form>
);

export default CheckBoxes;