import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Button'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			text: 'Button updated'
		});
	}
	render() {
		return (
			<button
				type="button"
				className="button"
				onClick={this.handleClick }
			>
				{this.state.text}
			</button>
		);
	}
}
export default Button;