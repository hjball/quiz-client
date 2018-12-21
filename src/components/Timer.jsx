import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ seconds }) => {
	return <span className={seconds < 4 ? 'timer-red': 'timer'}>{ seconds }</span>
}

class Timer extends Component  {
	
	constructor(props) {
		super(props);
		this.state = {
			showCountdown: true,
		}
		this.timesUp = this.timesUp.bind(this);
	}

	timesUp() {
		this.props.timesUp();
		this.setState({showCountdown: false});
		setTimeout(() => this.setState({showCountdown: true}), 1);
	}

	render() {
		const {date, timesUp} = this.props;
		return this.state.showCountdown ? (
			<Countdown
				date={ date }
				renderer={ renderer }
				onComplete={ this.timesUp }>
			</Countdown>
		) : null
	}
};

export default Timer;